import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse, HttpXhrBackend} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginResponse} from "../response/LoginResponse";

@Injectable({
  providedIn: 'root'
})


export class CommunicatorService {

  private http : HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }))


  constructor(@Inject(String) private baseUrl : string)
  {

  }

  public doPost( urlPath : string, requestInfo : any, httpHeaders : HttpHeaders, returnType: any ) : any // Response Obj
  {
    let requestStrategy : RequestStrategy = new PostRequestStrategy();
    requestStrategy
        .setUrlPath(this.fixUrl(urlPath))
        .setBody(JSON.stringify(requestInfo))
        .setHeaders(httpHeaders);

    this.doRequest(requestStrategy, returnType);
  }


  public doGet( urlPath: string, httpHeaders : HttpHeaders, returnType : any ) : any
  {
    let requestStrategy : RequestStrategy = new GetRequestStrategy();
    requestStrategy
        .setUrlPath(this.fixUrl(urlPath))
        .setHeaders(httpHeaders);

    this.doRequest(requestStrategy, returnType);
  }

  public doPut(urlPath: string, requestInfo : any, httpHeaders : HttpHeaders, returnType : any ) : any
  {
    let requestStrategy : RequestStrategy = new PutRequestStrategy();
    requestStrategy
        .setUrlPath(this.fixUrl(urlPath))
        .setBody(JSON.stringify(requestInfo))
        .setHeaders(httpHeaders);

    this.doRequest(requestStrategy, returnType);
  }

  private doRequest( requestStrategy : RequestStrategy, returnType: any ) //Any Response type.
  {
    return requestStrategy.sendRequest(this.http)
        .subscribe( (response : HttpResponse<any>) =>
        {
          console.log(response);
          console.log(response.body)
          if ( response.ok )
          {
            // Success!


            let object = JSON.parse(response.body);
            return new LoginResponse(object.success, object.message);
          }
          else
          {
            // Error, but 200 response.
            return response.body
          }

        },
        (error: HttpErrorResponse) =>
        {
          // Error.
          console.log("Error = " + error.error.valueOf());
          console.log("Error 2 = " + error.message);
          return error;
        });
  }

  private fixUrl(url : string)
  {
    return url.startsWith("/") ? this.baseUrl + url : this.baseUrl + "/" + url;
  }
}

export interface RequestStrategy {
  sendRequest(connection : HttpClient): Observable<HttpResponse<any>>;
  setUrlPath(urlPath : string): RequestStrategy;
  setBody(body : string): RequestStrategy;
  setHeaders(httpHeaders : HttpHeaders): RequestStrategy;
}

export class PostRequestStrategy implements RequestStrategy
{
  private urlPath : string;
  private body : string;

  sendRequest(connection : HttpClient): Observable<HttpResponse<any>>
  {
    return connection.post(this.urlPath, this.body, {observe: 'response'});
  }

  setHeaders(httpHeaders : HttpHeaders)
  {
    // Not implemented.
    return this;
  }

  setUrlPath(urlPath : string)
  {
    this.urlPath = urlPath;
    return this;
  }

  setBody(body : string)
  {
    this.body = body;
    return this;
  }
}

export class GetRequestStrategy implements RequestStrategy
{
  private httpHeaders : HttpHeaders;
  private urlPath : string;

  sendRequest(connection : HttpClient): Observable<HttpResponse<any>>
  {
    console.log("Username = " + this.httpHeaders.get('username'));
    console.log("Password = " + this.httpHeaders.get('password'));
    console.log("URL PATH = " + this.urlPath);
    return connection.get(this.urlPath, {headers: this.httpHeaders, observe: 'response'});
  }

  setHeaders(httpHeaders : HttpHeaders)
  {
    this.httpHeaders = httpHeaders;

    // Adds key & values to urlPath (so that a query section is appended on, the headers don't seem to work).
    this.addQueryToString();

    return this;
  }

  setUrlPath(urlPath: string): RequestStrategy
  {
    this.urlPath = urlPath;
    return this;
  }

  setBody(body: string): RequestStrategy {
    // Not implemented.
    return this;
  }

  private addQueryToString() : void
  {
    let headerKeys = this.httpHeaders.keys();
    this.urlPath += "?"
    for ( let i = 0; i < headerKeys.length; i++ )
    {
      let value = this.httpHeaders.get(headerKeys[i]);

      if ( i != (headerKeys.length - 1) )
      {
        this.urlPath += headerKeys[i] + "=" + value + "&";
      }
      else
      {
        this.urlPath += headerKeys[i] + "=" + value;
      }
    }
  }
}

export class PutRequestStrategy implements RequestStrategy
{
  private httpHeaders : HttpHeaders;
  private urlPath : string;
  private body : string;
  sendRequest(connection : HttpClient): Observable<HttpResponse<any>>
  {
    return connection.put(this.urlPath, this.body, {headers : this.httpHeaders, observe: 'response'})
  }

  setHeaders(httpHeaders : HttpHeaders)
  {
    this.httpHeaders = httpHeaders;
    return this;
  }

  setUrlPath(urlPath: string): RequestStrategy
  {
    this.urlPath = urlPath;
    return this;
  }

  setBody(body : string)
  {
    this.body = body;
    return this;
  }
}

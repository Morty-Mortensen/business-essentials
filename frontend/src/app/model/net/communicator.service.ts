import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse, HttpXhrBackend} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginResponse} from "../response/LoginResponse";

@Injectable({
  providedIn: 'root',
})


export class CommunicatorService {


  private http : HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }))
  public observer : Observer;

  constructor(@Inject(String) private baseUrl : string, observer : Observer)
  {
    this.observer = observer;
  }

  public static addQueryToString(header : HttpHeaders) : string
  {
    let urlPath : string = ""
    let headerKeys = header.keys();
    urlPath += "?"
    for ( let i = 0; i < headerKeys.length; i++ )
    {
      let value = header.get(headerKeys[i]);

      if ( i != (headerKeys.length - 1) )
      {
        urlPath += headerKeys[i] + "=" + value + "&";
      }
      else
      {
        urlPath += headerKeys[i] + "=" + value;
      }
    }
    return urlPath;
  }

  public doPost( urlPath : string, requestInfo : any, httpHeaders : HttpHeaders ) : any // Response Obj
  {
    let requestStrategy : RequestStrategy = new PostRequestStrategy();
    requestStrategy
        .setUrlPath(this.fixUrl(urlPath))
        .setBody(JSON.stringify(requestInfo))
        .setHeaders(httpHeaders);

    return this.doRequest(requestStrategy);
  }


  public doGet( urlPath: string, httpHeaders : HttpHeaders) : void
  {
    let requestStrategy : RequestStrategy = new GetRequestStrategy();
    requestStrategy
        .setUrlPath(this.fixUrl(urlPath))
        .setHeaders(httpHeaders);

    this.doRequest(requestStrategy);
  }

  public doPut(urlPath: string, requestInfo : any, httpHeaders : HttpHeaders ) : void
  {
    let requestStrategy : RequestStrategy = new PutRequestStrategy();
    requestStrategy
        .setUrlPath(this.fixUrl(urlPath))
        .setBody(JSON.stringify(requestInfo))
        .setHeaders(httpHeaders);

    this.doRequest(requestStrategy);
  }

  private doRequest(requestStrategy: RequestStrategy) : void //Any Response type.
  {

    requestStrategy.sendRequest(this.http)
        .subscribe((response: HttpResponse<any>) =>
            {
              console.log(response);
              console.log(response.body)
              if (response.ok && response.body.success)
              {
                // Success!
                console.log(response.body.message)
                console.log(response.body.success)
                this.observer.successful(response.body);
              }
              else
              {
                // Unsuccessful, but 200 response.
                this.observer.unsuccessful(response.body);
              }

            },
            (error: HttpErrorResponse) =>
            {
              // Error.
              this.observer.error(error);
            });
  }

  private fixUrl(url : string)
  {
    return url.startsWith("/") ? this.baseUrl + url : this.baseUrl + "/" + url;
  }
}

export interface RequestStrategy
{
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
    return connection.get(this.urlPath, {headers: this.httpHeaders, observe: 'response'});
  }

  setHeaders(httpHeaders : HttpHeaders)
  {
    this.httpHeaders = httpHeaders;
    this.urlPath += CommunicatorService.addQueryToString(this.httpHeaders)
    return this;
  }

  setUrlPath(urlPath: string): RequestStrategy
  {
    this.urlPath = urlPath;
    return this;
  }

  setBody(body: string): RequestStrategy
  {
    // Not implemented.
    return this;
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
    // Adds key & values to urlPath (so that a query section is appended on, the headers don't seem to work).
    this.urlPath += CommunicatorService.addQueryToString(this.httpHeaders)
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


@Injectable({
  providedIn: 'root'
})
export abstract class Observer
{
  abstract successful(responseBody : any);
  abstract unsuccessful(responseBody : any);
  abstract error(error : HttpErrorResponse);
}

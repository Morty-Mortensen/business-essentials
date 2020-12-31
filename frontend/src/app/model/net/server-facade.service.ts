import {Inject, Injectable} from '@angular/core';
import {CommunicatorService} from "./communicator.service";
import {HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {LoginRequest} from "../request/LoginRequest";
import {LoginResponse} from "../response/LoginResponse";
import { Observer } from "./communicator.service"

@Injectable({
  providedIn: 'root'
})


export class ServerFacadeService extends Observer {

  //    private static final String SERVER_URL = "https://qfgtrqql66.execute-api.us-west-1.amazonaws.com/dev";
  //     private final ClientCommunicator clientCommunicator = new ClientCommunicator(SERVER_URL);
  private static SERVER_URL = "http://localhost:8080";
  private communicator : CommunicatorService = new CommunicatorService(ServerFacadeService.SERVER_URL, this);
  private observer : ServerFacadeObserver;
  constructor(observer : ServerFacadeObserver)
  {
    super();
    this.observer = observer;
  }

  public login(loginRequest : LoginRequest, urlPath : string) : void
  {
    let headers : HttpHeaders = new HttpHeaders();
    headers = headers.append(LoginRequest.USERNAME, loginRequest.username);
    headers = headers.append(LoginRequest.PASSWORD, loginRequest.password);

    console.log("Username 1st = " + headers.get(LoginRequest.USERNAME));
    console.log("Username 2nd = " + headers.get('username'));

    this.communicator.doGet(urlPath, headers);
  }

  successful(responseBody: any)
  {
    console.log("In the Server Facade Observer.");
    this.observer.successful(responseBody)
  }

  unsuccessful(responseBody: any)
  {
    this.observer.unsuccessful(responseBody);
  }

  error(error: HttpErrorResponse)
  {
    this.observer.error(error);
  }
}

@Injectable({
  providedIn: 'root'
})
export abstract class ServerFacadeObserver
{
  abstract successful(responseBody: any);
  abstract unsuccessful(responseBody: any);
  abstract error(error : HttpErrorResponse);
}


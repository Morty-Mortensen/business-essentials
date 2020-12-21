import { Injectable } from '@angular/core';
import {CommunicatorService} from "./communicator.service";
import {HttpHeaders} from "@angular/common/http";
import {LoginRequest} from "../request/LoginRequest";
import {LoginResponse} from "../response/LoginResponse";

@Injectable({
  providedIn: 'root'
})


export class ServerFacadeService {

  //    private static final String SERVER_URL = "https://qfgtrqql66.execute-api.us-west-1.amazonaws.com/dev";
  //     private final ClientCommunicator clientCommunicator = new ClientCommunicator(SERVER_URL);
  private static SERVER_URL = "http://localhost:8080";
  private communicator : CommunicatorService = new CommunicatorService(ServerFacadeService.SERVER_URL);
  constructor() { }

  public login(loginRequest : LoginRequest, urlPath : string) : LoginResponse
  {
    let headers : HttpHeaders = new HttpHeaders();
    headers = headers.append(LoginRequest.USERNAME, loginRequest.username);
    headers = headers.append(LoginRequest.PASSWORD, loginRequest.password);

    console.log("Username 1st = " + headers.get(LoginRequest.USERNAME));
    console.log("Username 2nd = " + headers.get('username'));

    let loginResponse : LoginResponse = this.communicator.doGet(urlPath,
        headers,
        typeof LoginResponse);

    return loginResponse;
  }
}


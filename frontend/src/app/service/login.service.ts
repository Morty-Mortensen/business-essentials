import { Injectable } from '@angular/core';
import {LoginRequest} from "../model/request/LoginRequest";
import {LoginResponse} from "../model/response/LoginResponse";
import {ServerFacadeService} from "../model/net/server-facade.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private static LOGIN_URL = "/login";

  constructor() { }

  public login(loginRequest : LoginRequest) : LoginResponse
  {
    return this.getServerFacade().login(loginRequest, LoginService.LOGIN_URL)
  }

  private getServerFacade()
  {
    return new ServerFacadeService();
  }
}

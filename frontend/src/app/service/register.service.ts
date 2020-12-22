import { Injectable } from '@angular/core';
import {LoginRequest} from "../model/request/LoginRequest";
import {LoginResponse} from "../model/response/LoginResponse";
import {ServerFacadeService} from "../model/net/server-facade.service";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private static REGISTER_URL = "/register";

  constructor() { }

  public login(registerRequest : RegisterRequest) : RegisterResponse
  {
    return this.getServerFacade().login(loginRequest, RegisterService.LOGIN_URL)
  }

  private getServerFacade()
  {
    return new ServerFacadeService();
  }
}

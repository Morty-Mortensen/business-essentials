import {Inject, Injectable} from '@angular/core';
import {LoginRequest} from "../model/request/LoginRequest";
import {LoginResponse} from "../model/response/LoginResponse";
import {ServerFacadeObserver, ServerFacadeService} from "../model/net/server-facade.service";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ServerFacadeObserver
{

  private static LOGIN_URL = "/login";
  private observer : LoginObserver;

  constructor(observer : LoginObserver)
  {
    super();
    this.observer = observer
  }

  public login(loginRequest : LoginRequest) : void
  {
    this.getServerFacade().login(loginRequest, LoginService.LOGIN_URL)
  }

  private getServerFacade()
  {
    return new ServerFacadeService(this);
  }

  successful(loginResponse : LoginResponse)
  {
    console.log("In the Login Service Observer.");
    this.observer.loginSuccessful(loginResponse);
  }

  unsuccessful(loginResponse : LoginResponse)
  {
    this.observer.loginUnsuccessful(loginResponse);
  }

  error(error: HttpErrorResponse)
  {
    this.observer.loginError(error)
  }

}

@Injectable({
  providedIn: 'root'
})
export abstract class LoginObserver
{
   abstract loginSuccessful(loginResponse : LoginResponse);
   abstract loginUnsuccessful(loginResponse : LoginResponse);
   abstract loginError(error : HttpErrorResponse);
}

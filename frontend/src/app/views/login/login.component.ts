import {Component, OnInit, ViewChild} from '@angular/core';
import {UserInformationCardComponent} from "../../components/user-information-card/user-information-card.component";
import {LoginRequest} from "../../model/request/LoginRequest";
import {LoginResponse} from "../../model/response/LoginResponse";
import {LoginObserver, LoginService} from "../../service/login.service";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends LoginObserver implements OnInit {

  private loginService : LoginService = new LoginService(this);
  public saving : boolean = false;
  public success : boolean = false;
  public errorMessage : string = "";

  constructor(private http: HttpClient)
  {
    super();
  }

  ngOnInit(): void {

  }



  public async login(request : LoginRequest)
  {
    console.log("MADE IT HERE!!!");
    this.success = false;
    this.errorMessage = "";
    this.saving = true;
    this.loginService.login(request);
  }

  loginSuccessful(loginResponse: LoginResponse)
  {
    this.saving = false;
    this.success = true;
  }

  loginUnsuccessful(loginResponse: LoginResponse)
  {
    this.saving = false;
    this.errorMessage = loginResponse.message;
  }

  loginError(error: HttpErrorResponse)
  {
    this.saving = false;
    alert(error.message);
  }

}

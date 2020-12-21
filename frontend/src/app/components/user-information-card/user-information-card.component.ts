import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "../../service/login.service";
import {LoginRequest} from "../../model/request/LoginRequest";

@Component({
  selector: 'app-user-information-card',
  templateUrl: './user-information-card.component.html',
  styleUrls: ['./user-information-card.component.css']
})
export class UserInformationCardComponent implements OnInit {

  @Input() title : string = ""
  @Input() login : boolean = false
  @Input() register : boolean = false
  @Input() firstNameSwitch : boolean = false
  @Input() lastNameSwitch : boolean = false
  @Input() emailSwitch : boolean = false
  @Input() passwordSwitch : boolean = false
  @Input() uploadPhotoSwitch : boolean = false
  @Input() forgotPasswordSwitch : boolean = false

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    imageBase64: new FormControl()
  })



  constructor(private http: HttpClient, private loginService : LoginService) { }

  ngOnInit(): void
  {

  }

  public loginUser()
  {
    console.log("I'm logging in...")

    // let httpHeaders = new HttpHeaders()
    // httpHeaders.append('Access-Control-Allow-Origin', '*');
    // httpHeaders.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    // httpHeaders.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    // httpHeaders.append('name', 'Tyler');
    // this.http.post('http://localhost:8080/hello', {'testKey': 'Hello There my Friend (from Angular)'}, {headers: httpHeaders}  )
    //     .subscribe(response => {
    //       console.log("Response: " + response);
    //     });
    //proxy = https://cors-anywhere.herokuapp.com/
    //192.168.0.173

    // console.log(this.form.get('email').value);
    // console.log(this.form.get('password').value);
    let response = this.loginService.login(new LoginRequest(this.form.get('email').value, this.form.get('password').value))

    console.log("Response = " + response);
    // this.http.get('http://localhost:8080/hello?name=Tyler')
    //     .subscribe(response => {
    //       console.log("Response: " + response);
    //     });
  }

  public registerUser()
  {

  }

}

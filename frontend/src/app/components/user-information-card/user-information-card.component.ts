import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRequest} from "../../model/request/LoginRequest";


@Component({
  selector: 'app-user-information-card',
  templateUrl: './user-information-card.component.html',
  styleUrls: ['./user-information-card.component.css']
})
export class UserInformationCardComponent implements OnInit
{

  @Input() title : string = ""
  @Input() login : boolean = false
  @Input() register : boolean = false
  @Input() firstNameSwitch : boolean = false
  @Input() lastNameSwitch : boolean = false
  @Input() emailSwitch : boolean = false
  @Input() passwordSwitch : boolean = false
  @Input() uploadPhotoSwitch : boolean = false
  @Input() forgotPasswordSwitch : boolean = false
  @Output() loginRequest : EventEmitter<LoginRequest> = new EventEmitter<LoginRequest>();

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    imageBase64: new FormControl('')
  })

  constructor() {}

  ngOnInit(): void
  {

  }

  public isValidLogin() : boolean
  {
    return this.form.get('email').value != ''
        && this.form.get('password').value != ''
  }

  public isValidRegister() : boolean
  {
    return this.form.get('email').value != ''
        && this.form.get('password').value != ''
        && this.form.get('firstName').value != ''
        && this.form.get('lastName').value != ''
  }

  public loginUser()
  {
    this.loginRequest.emit(new LoginRequest(this.form.get('email').value, this.form.get('password').value));
  }


  public registerUser()
  {

  }



}

import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    imageBase64: new FormControl()
  })



  constructor() { }

  ngOnInit(): void
  {

  }

  public loginUser()
  {

  }

  public registerUser()
  {

  }

}

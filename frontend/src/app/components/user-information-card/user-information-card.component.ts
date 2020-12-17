import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-information-card',
  templateUrl: './user-information-card.component.html',
  styleUrls: ['./user-information-card.component.css']
})
export class UserInformationCardComponent implements OnInit {

  @Input() title : string = ""
  @Input() buttonTitle : string = ""
  @Input() firstNameSwitch : boolean = false
  @Input() lastNameSwitch : boolean = false
  @Input() emailSwitch : boolean = false
  @Input() passwordSwitch : boolean = false
  @Input() uploadPhotoSwitch : boolean = false
  @Input() forgotPasswordSwitch : boolean = false


  firstName : string = ""
  lastName : string = ""
  email : string = ""
  password : string = ""
  imageBase64 : string = ""

  constructor() { }

  ngOnInit(): void {
  }

}

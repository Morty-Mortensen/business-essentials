import { Component, OnInit } from '@angular/core';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {
  faAngleDown = faAngleDown;
  constructor() { }

  ngOnInit(): void {
  }

}

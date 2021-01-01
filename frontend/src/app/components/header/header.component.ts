import {Component, OnInit, AfterViewInit, ViewChild, ViewChildren} from '@angular/core';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {RouteDisplay} from "../../domain/RouteDisplay/RouteDisplay";
import {MainNavigationComponent} from "../main-navigation/main-navigation.component";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  public searchOptionsHeader : Array<RouteDisplay> = [];

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void
  {
    this.searchOptionsHeader = MainNavigationComponent.routesWithoutException;
  }
}

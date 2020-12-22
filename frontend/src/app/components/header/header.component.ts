import {Component, OnInit, ViewChild} from '@angular/core';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {RouteDisplay} from "../../domain/RouteDisplay";
import {MainNavigationComponent} from "../main-navigation/main-navigation.component";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch;
  public search : string = "";
  public searchResults : Array<RouteDisplay> = [];

  @ViewChild(MainNavigationComponent) mainNavigation : MainNavigationComponent

  constructor(public titleCasePipe : TitleCasePipe) {}

  public searchRoutes(userSearchInput : string) : void
  {
    this.searchResults = this.mainNavigation.routesWithoutException.filter( route => {
      return route.displayName.includes(userSearchInput.toLowerCase());
    });
  }

  public clearSearch()
  {
    this.search = "";
  }

  ngOnInit(): void {
  }
}

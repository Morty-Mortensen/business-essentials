import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {RouteDisplay} from "../../domain/RouteDisplay/RouteDisplay";
import {MainNavigationComponent} from "../main-navigation/main-navigation.component";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  faSearch = faSearch;
  public search : string = "";
  public searchResults : Array<RouteDisplay> = [];
  @Input() searchOptions : Array<RouteDisplay> = [];
  @Input() placeholder : string = "Search...";
  @Input() width : string = "";

  constructor(public titleCasePipe : TitleCasePipe) {}

  public searchRoutes(userSearchInput : string) : void
  {
    this.searchResults = this.searchOptions.filter( route => {
      return route.displayName.includes(userSearchInput.toLowerCase());
    });
  }

  public clearSearch()
  {
    this.search = "";
  }

  ngOnInit(): void {
    if ( this.searchOptions === undefined )
    {
      this.searchOptions = [];
    }
  }

}

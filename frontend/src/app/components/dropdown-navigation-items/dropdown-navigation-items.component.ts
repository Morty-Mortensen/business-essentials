import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../domain/Article";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-dropdown-navigation-items',
  templateUrl: './dropdown-navigation-items.component.html',
  styleUrls: ['./dropdown-navigation-items.component.css']
})
export class DropdownNavigationItemsComponent implements OnInit {

  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  @Input() articlesByCategoryWithDropdown : Map<String, Array<Article>> = new Map<String, Array<Article>>();
  @Input() articlesByCategoryWithoutDropdown : Array<Article> = [];
  @Input() title : string = "Default Title";
  public selectedArticlesByCategory : Array<Article> = [];
  public selectedArticlesByCategoryKey : string = "";
  public isCategorySelected : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public clearCategory()
  {
    this.isCategorySelected = false;
    this.selectedArticlesByCategoryKey = '';
    this.selectedArticlesByCategory = [];
  }

  public expandSelectedCategory(key : string)
  {
    if ( key != this.selectedArticlesByCategoryKey || this.selectedArticlesByCategory.length === 0 )
    {
      this.selectedArticlesByCategoryKey = key;
      this.selectedArticlesByCategory = this.articlesByCategoryWithDropdown.get(key);
      this.isCategorySelected = true;
    }
    else
    {
      this.selectedArticlesByCategory = [];
      this.isCategorySelected = false;
    }
  }

}

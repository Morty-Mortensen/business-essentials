import {
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import {RouteDisplay} from "../../../domain/RouteDisplay/RouteDisplay";
import {MainNavigationComponent} from "../../../components/main-navigation/main-navigation.component";
import {Article} from "../../../domain/Article";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-accounting-blog',
  templateUrl: './accounting-blog.component.html',
  styleUrls: ['./accounting-blog.component.css']
})
export class AccountingBlogComponent implements OnInit, AfterViewInit {

  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  public searchOptionsAccountingBlog : Array<RouteDisplay> = [];
  public articlesByYear : Map<String, Array<Article>> = new Map<String, Array<Article>>();
  public selectedArticlesByYear : Array<Article> = [];
  public selectedArticlesByYearKey : string = "";
  public isYearSelected : boolean = false;

  public articlesByCategory : Map<String, Array<Article>> = new Map<String, Array<Article>>();
  public selectedArticlesByCategory : Array<Article> = [];
  public selectedArticlesByCategoryKey : string = "";
  public isCategorySelected : boolean = false;

  public userArticles : Array<Article> = [];

  public relatedArticles : Array<Article> = [];

  public static SEARCH_PATH_PATTERN = '/accounting/accounting-blog/'

  constructor() { }

  ngOnInit(): void {
    this.getArticlesByYear();
    this.getArticlesByCategory();
    this.getUserArticles();
    this.getRelatedArticles();
  }

  ngAfterViewInit(): void
  {
    this.searchOptionsAccountingBlog = MainNavigationComponent.routesWithoutException.filter( route => {
      return route.pathName.includes(AccountingBlogComponent.SEARCH_PATH_PATTERN);
    });
  }

  // Temporary test data.
  public getArticlesByYear()
  {
    let currentdate = new Date();
    let datetime : string = "Last Sync: " + currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    this.articlesByYear.set('2020',
        [new Article(1, 'Title 1', 'Subtitle 1', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog')]
    );
    let twentyTwenty = this.articlesByYear.get('2020');
    twentyTwenty.push(new Article(2, 'Title 2', 'Subtitle 2', 'assets/dice.jpg', 'Body Text', datetime, 'Internet And Accounting', '/accounting/accounting-blog'));
    this.articlesByYear.set('2020', twentyTwenty);


    this.articlesByYear.set('2021',
        [new Article(1, 'Title 3', 'Subtitle 3', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog')]
    );

    let twentyTwentyOne = this.articlesByYear.get('2021');
    twentyTwentyOne.push(new Article(4, 'Title 4', 'Subtitle 4', 'assets/dice.jpg', 'Body Text', datetime, 'Internet And Accounting', '/accounting/accounting-blog'));
    this.articlesByYear.set('2021', twentyTwentyOne);

  }

  public clearYear()
  {
    this.isYearSelected = false;
    this.selectedArticlesByYearKey = '';
    this.selectedArticlesByYear = [];
  }

  public expandSelectedYear(key : string)
  {
    if ( key != this.selectedArticlesByYearKey || this.selectedArticlesByYear.length === 0 )
    {
      this.selectedArticlesByYearKey = key;
      this.selectedArticlesByYear = this.articlesByYear.get(key);
      this.isYearSelected = true;
    }
    else
    {
      this.selectedArticlesByYear = [];
      this.isYearSelected = false;
    }
  }

  public getArticlesByCategory()
  {
    let currentdate = new Date();
    let datetime : string = "Last Sync: " + currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    this.articlesByCategory.set('Auditing',
        [new Article(1, 'Title 1', 'Subtitle 1', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog')]
    );

    let twentyTwenty = this.articlesByCategory.get('Auditing');
    twentyTwenty.push(new Article(2, 'Title 2', 'Subtitle 2', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog'));
    this.articlesByCategory.set('Auditing', twentyTwenty);


    this.articlesByCategory.set('Internet And Accounting',
        [new Article(1, 'Title 3', 'Subtitle 3', 'assets/dice.jpg', 'Body Text', datetime, 'Internet And Accounting', '/accounting/accounting-blog')]
    );

    let twentyTwentyOne = this.articlesByCategory.get('Internet And Accounting');
    twentyTwentyOne.push(new Article(4, 'Title 4', 'Subtitle 4', 'assets/dice.jpg', 'Body Text', datetime, 'Internet And Accounting', '/accounting/accounting-blog'));
    this.articlesByCategory.set('Internet And Accounting', twentyTwentyOne);
  }

  public expandSelectedCategory(key : string)
  {
    if ( key != this.selectedArticlesByCategoryKey || this.selectedArticlesByCategory.length === 0 )
    {
      this.selectedArticlesByCategoryKey = key;
      this.selectedArticlesByCategory = this.articlesByCategory.get(key);
      this.isCategorySelected = true;
    }
    else
    {
      this.selectedArticlesByCategory = [];
      this.isCategorySelected = false;
    }
  }

  public clearCategory()
  {
    this.isCategorySelected = false;
    this.selectedArticlesByCategoryKey = '';
    this.selectedArticlesByCategory = [];
  }

  public getUserArticles()
  {
    let currentdate = new Date();
    let datetime : string = "Last Sync: " + currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    this.userArticles.push(new Article(1, 'Title 1', 'Subtitle 1', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog'))
    this.userArticles.push(new Article(1, 'Title 2', 'Subtitle 2', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog'))
    this.userArticles.push(new Article(1, 'Title 3', 'Subtitle 3', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog'))
    this.userArticles.push(new Article(1, 'Title 4', 'Subtitle 4', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog'))
    this.userArticles.push(new Article(1, 'Title 5', 'Subtitle 5', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog'))
    this.userArticles.push(new Article(1, 'Title 6', 'Subtitle 6', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog'))
    this.userArticles.push(new Article(1, 'Title 7', 'Subtitle 7', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog'))
    this.userArticles.push(new Article(1, 'Title 8', 'Subtitle 8', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog'))
    this.userArticles.push(new Article(1, 'Title 9', 'Subtitle 9', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog'))
    this.userArticles.push(new Article(1, 'Title 10', 'Subtitle 10', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog'))
  }

  // Limit to 3.
  public getRelatedArticles()
  {
    let currentdate = new Date();
    let datetime : string = "Last Sync: " + currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    this.relatedArticles.push(new Article(1, 'Title 1', 'Subtitle 1', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog'))
    this.relatedArticles.push(new Article(1, 'Title 2', 'Subtitle 2', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog'))
    this.relatedArticles.push(new Article(1, 'Title 3', 'Subtitle 3', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog'))
  }


}
import {
  Component,
  OnInit,
} from '@angular/core';
import {RouteDisplay} from "../../../domain/RouteDisplay/RouteDisplay";
import {MainNavigationComponent} from "../../../components/main-navigation/main-navigation.component";
import {Article} from "../../../domain/Article";

@Component({
  selector: 'app-accounting-blog',
  templateUrl: './accounting-blog.component.html',
  styleUrls: ['./accounting-blog.component.css']
})
export class AccountingBlogComponent implements OnInit {

  public searchOptionsAccountingBlog : Array<RouteDisplay> = [];
  public articlesByYear : Map<String, Array<Article>> = new Map<String, Array<Article>>();
  public articlesByCategory : Map<String, Array<Article>> = new Map<String, Array<Article>>();
  public userArticles : Array<Article> = [];
  public relatedArticles : Array<Article> = [];
  public currentArticle : Article = new Article(1,
      'Current BlogArticle Title',
      'subtitle',
      'assets/dice.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam elementum pulvinar etiam non quam. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Viverra orci sagittis eu volutpat odio facilisis. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tempus egestas sed sed risus pretium quam. Vitae congue mauris rhoncus aenean vel. Ac turpis egestas integer eget aliquet nibh praesent tristique. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Nulla aliquet enim tortor at auctor urna nunc id. Faucibus in ornare quam viverra orci sagittis eu.\n' +
      'Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Hac habitasse platea dictumst quisque sagittis purus. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Vitae proin sagittis nisl rhoncus mattis. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Ornare lectus sit amet est placerat. Mattis rhoncus urna neque viverra justo.\n' +
      'Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Arcu vitae elementum curabitur vitae. Lacus viverra vitae congue eu. Montes nascetur ridiculus mus mauris vitae ultricies leo. Enim neque volutpat ac tincidunt vitae semper quis. Odio pellentesque diam volutpat commodo sed egestas. Faucibus vitae aliquet nec ullamcorper sit amet risus. Condimentum id venenatis a condimentum vitae sapien pellentesque. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Nec feugiat nisl pretium fusce id velit ut. Risus ultricies tristique nulla aliquet enim tortor at auctor. Id cursus metus aliquam eleifend mi in nulla posuere. Dui nunc mattis enim ut tellus.\n' +
      'Pulvinar etiam non quam lacus suspendisse faucibus. Urna cursus eget nunc scelerisque. Tristique nulla aliquet enim tortor at auctor urna. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Scelerisque felis imperdiet proin fermentum. Eu sem integer vitae justo eget magna. Id semper risus in hendrerit gravida rutrum quisque non. Morbi tristique senectus et netus et. Facilisis volutpat est velit egestas dui id. Faucibus a pellentesque sit amet porttitor eget. Cras adipiscing enim eu turpis. Tortor aliquam nulla facilisi cras fermentum odio. Justo nec ultrices dui sapien. Nullam vehicula ipsum a arcu. Aenean pharetra magna ac placerat. Id aliquet lectus proin nibh. Imperdiet massa tincidunt nunc pulvinar sapien. Egestas purus viverra accumsan in nisl nisi scelerisque eu.\n' +
      'Ultrices in iaculis nunc sed augue lacus viverra. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Donec ultrices tincidunt arcu non sodales neque sodales ut. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Facilisis volutpat est velit egestas dui id ornare arcu odio. Aliquet risus feugiat in ante metus. Egestas congue quisque egestas diam in arcu cursus euismod. Ac ut consequat semper viverra nam. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Suscipit tellus mauris a diam. Ac auctor augue mauris augue neque gravida in fermentum. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Tellus elementum sagittis vitae et leo duis ut. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Vitae sapien pellentesque habitant morbi tristique senectus. At volutpat diam ut venenatis tellus. Tellus molestie nunc non blandit massa enim nec dui. Gravida quis blandit turpis cursus in. Sit amet consectetur adipiscing elit duis.\n',
      '01-01-2021', 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen');

  public SEARCH_PATH_PATTERN = '/accounting/accounting-blog/'

  constructor() { }

  ngOnInit(): void {
    this.getArticlesByYear();
    this.getArticlesByCategory();
    this.getUserArticles();
    this.getRelatedArticles();
  }

  // ngAfterViewInit(): void
  // {
  //   this.searchOptionsAccountingBlog = MainNavigationComponent.routesWithoutException.filter( route => {
  //     return route.pathName.includes(this.SEARCH_PATH_PATTERN);
  //   });
  // }

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
        [new Article(1, 'Title 1', 'Subtitle 1', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen')]
    );
    let twentyTwenty = this.articlesByYear.get('2020');
    twentyTwenty.push(new Article(2, 'Title 2', 'Subtitle 2', 'assets/dice.jpg', 'Body Text', datetime, 'Internet And Accounting', '/accounting/accounting-blog', 'Tyler Mortensen'));
    this.articlesByYear.set('2020', twentyTwenty);


    this.articlesByYear.set('2021',
        [new Article(1, 'Title 3', 'Subtitle 3', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen')]
    );

    let twentyTwentyOne = this.articlesByYear.get('2021');
    twentyTwentyOne.push(new Article(4, 'Title 4', 'Subtitle 4', 'assets/dice.jpg', 'Body Text', datetime, 'Internet And Accounting', '/accounting/accounting-blog', 'Tyler Mortensen'));
    this.articlesByYear.set('2021', twentyTwentyOne);

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
        [new Article(1, 'Title 1', 'Subtitle 1', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen')]
    );

    let twentyTwenty = this.articlesByCategory.get('Auditing');
    twentyTwenty.push(new Article(2, 'Title 2', 'Subtitle 2', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen'));
    this.articlesByCategory.set('Auditing', twentyTwenty);


    this.articlesByCategory.set('Internet And Accounting',
        [new Article(1, 'Title 3', 'Subtitle 3', 'assets/dice.jpg', 'Body Text', datetime, 'Internet And Accounting', '/accounting/accounting-blog', 'Tyler Mortensen')]
    );

    let twentyTwentyOne = this.articlesByCategory.get('Internet And Accounting');
    twentyTwentyOne.push(new Article(4, 'Title 4', 'Subtitle 4', 'assets/dice.jpg', 'Body Text', datetime, 'Internet And Accounting', '/accounting/accounting-blog', 'Tyler Mortensen'));
    this.articlesByCategory.set('Internet And Accounting', twentyTwentyOne);
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
    this.userArticles.push(new Article(1, 'Title 1', 'Subtitle 1', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen'))
    this.userArticles.push(new Article(1, 'Title 2', 'Subtitle 2', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen'))
    this.userArticles.push(new Article(1, 'Title 3', 'Subtitle 3', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen'))
    this.userArticles.push(new Article(1, 'Title 4', 'Subtitle 4', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen'))
    this.userArticles.push(new Article(1, 'Title 5', 'Subtitle 5', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen'))
    this.userArticles.push(new Article(1, 'Title 6', 'Subtitle 6', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen'))
    this.userArticles.push(new Article(1, 'Title 7', 'Subtitle 7', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen'))
    this.userArticles.push(new Article(1, 'Title 8', 'Subtitle 8', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen'))
    this.userArticles.push(new Article(1, 'Title 9', 'Subtitle 9', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen'))
    this.userArticles.push(new Article(1, 'Title 10', 'Subtitle 10', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen'))
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
    this.relatedArticles.push(new Article(1, 'Title 1', 'Subtitle 1', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen'))
    this.relatedArticles.push(new Article(1, 'Title 2', 'Subtitle 2', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen'))
    this.relatedArticles.push(new Article(1, 'Title 3', 'Subtitle 3', 'assets/dice.jpg', 'Body Text', datetime, 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen'))
  }

  // public createParagraphs(body : string)
  // {
  //   return body.split(/[\r\n]+/);
  // }


}
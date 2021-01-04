import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import {RouteDisplay} from "../../domain/RouteDisplay/RouteDisplay";
import {Article} from "../../domain/Article";
import {MainNavigationComponent} from "../main-navigation/main-navigation.component";
import {AccountingBlogComponent} from "../../views/accounting/accounting-blog/accounting-blog.component";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, AfterViewInit {

  public searchOptionsBlog : Array<RouteDisplay> = [];
  @Input() searchOptionsPlaceHolder : string = "Search...";
  @Input() articlesByYear : Map<String, Array<Article>> = new Map<String, Array<Article>>();
  @Input() articlesByCategory : Map<String, Array<Article>> = new Map<String, Array<Article>>();
  @Input() userArticles : Array<Article> = [];
  @Input() relatedArticles : Array<Article> = [];
  @Input() currentArticle : Article = new Article(1,
      'Current BlogArticle Title',
      'subtitle',
      'assets/dice.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam elementum pulvinar etiam non quam. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Viverra orci sagittis eu volutpat odio facilisis. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tempus egestas sed sed risus pretium quam. Vitae congue mauris rhoncus aenean vel. Ac turpis egestas integer eget aliquet nibh praesent tristique. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Nulla aliquet enim tortor at auctor urna nunc id. Faucibus in ornare quam viverra orci sagittis eu.\n' +
      'Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Hac habitasse platea dictumst quisque sagittis purus. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Vitae proin sagittis nisl rhoncus mattis. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Ornare lectus sit amet est placerat. Mattis rhoncus urna neque viverra justo.\n' +
      'Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Arcu vitae elementum curabitur vitae. Lacus viverra vitae congue eu. Montes nascetur ridiculus mus mauris vitae ultricies leo. Enim neque volutpat ac tincidunt vitae semper quis. Odio pellentesque diam volutpat commodo sed egestas. Faucibus vitae aliquet nec ullamcorper sit amet risus. Condimentum id venenatis a condimentum vitae sapien pellentesque. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Nec feugiat nisl pretium fusce id velit ut. Risus ultricies tristique nulla aliquet enim tortor at auctor. Id cursus metus aliquam eleifend mi in nulla posuere. Dui nunc mattis enim ut tellus.\n' +
      'Pulvinar etiam non quam lacus suspendisse faucibus. Urna cursus eget nunc scelerisque. Tristique nulla aliquet enim tortor at auctor urna. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Scelerisque felis imperdiet proin fermentum. Eu sem integer vitae justo eget magna. Id semper risus in hendrerit gravida rutrum quisque non. Morbi tristique senectus et netus et. Facilisis volutpat est velit egestas dui id. Faucibus a pellentesque sit amet porttitor eget. Cras adipiscing enim eu turpis. Tortor aliquam nulla facilisi cras fermentum odio. Justo nec ultrices dui sapien. Nullam vehicula ipsum a arcu. Aenean pharetra magna ac placerat. Id aliquet lectus proin nibh. Imperdiet massa tincidunt nunc pulvinar sapien. Egestas purus viverra accumsan in nisl nisi scelerisque eu.\n' +
      'Ultrices in iaculis nunc sed augue lacus viverra. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Donec ultrices tincidunt arcu non sodales neque sodales ut. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Facilisis volutpat est velit egestas dui id ornare arcu odio. Aliquet risus feugiat in ante metus. Egestas congue quisque egestas diam in arcu cursus euismod. Ac ut consequat semper viverra nam. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Suscipit tellus mauris a diam. Ac auctor augue mauris augue neque gravida in fermentum. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Tellus elementum sagittis vitae et leo duis ut. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Vitae sapien pellentesque habitant morbi tristique senectus. At volutpat diam ut venenatis tellus. Tellus molestie nunc non blandit massa enim nec dui. Gravida quis blandit turpis cursus in. Sit amet consectetur adipiscing elit duis.\n',
      '01-01-2021', 'Auditing', '/accounting/accounting-blog', 'Tyler Mortensen');
  @Input() SEARCH_PATH_PATTERN = '/';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void
  {
    this.searchOptionsBlog = MainNavigationComponent.routesWithoutException.filter( route => {
      return route.pathName.includes(this.SEARCH_PATH_PATTERN);
    });
  }

  public createParagraphs(body : string)
  {
    return body.split(/[\r\n]+/);
  }
}

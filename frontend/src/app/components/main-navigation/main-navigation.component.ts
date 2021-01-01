import {Component, OnInit, ChangeDetectorRef, Output, EventEmitter} from '@angular/core';
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {NavigationEnd, Route, Router} from "@angular/router";
import {RouteDisplay} from "../../domain/RouteDisplay/RouteDisplay";
import {TitleCasePipe} from "@angular/common";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {
  faAngleDown = faAngleDown;
  faAngleRight = faAngleRight;
  routes : Map<Number, Array<RouteDisplay>> = new Map();
  public mainRoutes : Map<Number, RouteDisplay> = new Map();
  private parentId : number = 0;

  public mainChildren : Array<RouteDisplay> = [];
  public firstChildren : Array<RouteDisplay> = [];
  public secondChildren : Array<RouteDisplay> = [];

  private mainKey : number = null;
  private firstChildKey : number = null;
  private secondChildKey : number = null;
  private currUrl : string = "";

  public static routesWithoutException : Array<RouteDisplay> = []



  constructor(private route: Router, public titleCasePipe: TitleCasePipe)
  {
    // Check if main page.
    this.route.events.pipe(filter(e => e instanceof NavigationEnd))
        .subscribe((s: NavigationEnd) =>
        {
          this.currUrl = s.urlAfterRedirects;
          if ( s.urlAfterRedirects === '/' )
          {
            this.mainRoutes.forEach((route : RouteDisplay, id : number) =>
            {
              return route.selected = false;
            });

          }
          else
          {
            this.mainRoutes = this.findSelectedByRouteMap(this.mainRoutes);
          }

          this.mainChildren = [];
          this.firstChildren = [];
          this.secondChildren = [];
        });
  }

  private getAllRoutesWithoutException(currUrl, children: Route[])
  {
    for ( let i = 0; i < children.length; i++ )
    {
      let displayLabel = children[i].path.substr(children[i].path.lastIndexOf('/') + 1, children[i].path.length).replace(/-/g, ' ');

      if ( displayLabel !== '' )
      {
        MainNavigationComponent.routesWithoutException.push(new RouteDisplay(null, displayLabel, currUrl + children[i].path));
      }

      if ( children[i].children !== undefined )
      {
        this.getAllRoutesWithoutException(currUrl + children[i].path + '/', children[i].children);
      }
    }
  }


  private getAllRoutes(parentID : number, currUrl : string, children: Route[], level : number) : void
  {

    if ( children !== undefined )
    {
      for ( let i = 0; i < children.length; i++ )
      {
        if ( this.isValidRoute(children[i].path) )
        {
          let displayLabel = children[i].path.substr(children[i].path.lastIndexOf('/') + 1, children[i].path.length).replace(/-/g, ' ');

          if ( children[i].children !== undefined )
          {
            this.parentId++;
          }

          if ( currUrl !== '/' )
          {
            if ( this.routes.has(parentID) == false )
            {
              let routeValues : Array<RouteDisplay> = [];
              if ( children[i].children !== undefined )
              {
                routeValues.push(new RouteDisplay( this.parentId, displayLabel, currUrl + children[i].path));
              }
              else
              {
                routeValues.push(new RouteDisplay( null, displayLabel, currUrl + children[i].path));
              }
              this.routes.set(parentID, routeValues);
            }
            else
            {
              if ( children[i].children !== undefined )
              {
                this.routes.get(parentID).push(new RouteDisplay(this.parentId, displayLabel, currUrl + children[i].path))

              }
              else
              {
                this.routes.get(parentID).push(new RouteDisplay(null, displayLabel, currUrl + children[i].path))
              }
            }
          }

          if ( children[i].children !== undefined )
          {
            if ( level === 0 )
            {
              this.mainRoutes.set(this.parentId, new RouteDisplay(this.parentId, displayLabel, currUrl + children[i].path));
            }
            this.getAllRoutes(this.parentId, currUrl + children[i].path + '/', children[i].children, level + 1);
          }
        }
      }
    }
  }

  private isValidRoute(path : string)
  {
    return !path.includes("login")
        && !path.includes("register")
        && path !== ''
  }

  public findSelectedByRoute(routes : Array<RouteDisplay>) : Array<RouteDisplay>
  {
    routes.forEach((route : RouteDisplay) =>
    {
      if ( this.currUrl.includes(route.pathName) )
      {
        return route.selected = true;
      }
      else
      {
        return route.selected = false;
      }
    })
    return routes;
  }

  public findSelectedByRouteMap(routes : Map<Number,RouteDisplay>) : Map<Number,RouteDisplay>
  {
    routes.forEach((route : RouteDisplay, id : number) =>
    {
      if ( this.currUrl.includes(route.pathName) )
      {
        return route.selected = true;
      }
      else
      {
        return route.selected = false;
      }
    })
    return routes;
  }

  findSelectedById(routes: Array<RouteDisplay>, key : number) : Array<RouteDisplay>
  {
    routes.forEach((route : RouteDisplay) =>
    {
      if ( route.id === key )
      {
        return route.selected = true;
      }
      else
      {
        return route.selected = false;
      }
    });
    return routes;
  }

  public getMainKey(key : number)
  {
    if ( this.mainChildren.length && this.mainKey === key )
    {
      this.mainChildren = [];
    }
    else
    {
      this.mainKey = key;
      this.mainChildren = this.routes.get(key);

      // Reset main route colors.
      this.mainRoutes.forEach((route : RouteDisplay, id : number) =>
      {
        return route.selected = false;
      });

      // Update to the current dropdown selected.
      this.mainRoutes.get(key).selected = true;

      this.mainChildren = this.findSelectedByRoute(this.mainChildren);

    }


    this.firstChildren = [];
    this.secondChildren = [];
  }

  public getFirstChildKey(key : number)
  {

    if ( this.firstChildren.length && this.firstChildKey === key )
    {
      this.firstChildren = [];
    }
    else
    {
      this.firstChildKey = key;
      this.firstChildren = this.routes.get(key);

      this.mainChildren = this.findSelectedById(this.mainChildren, key);
      this.firstChildren = this.findSelectedByRoute(this.firstChildren);
    }

    this.secondChildren = [];
  }

  public getSecondChildKey(key : number)
  {
    this.firstChildren = this.findSelectedById(this.firstChildren, key);
    this.secondChildren = this.routes.get(key);
    this.secondChildren = this.findSelectedByRoute(this.secondChildren);
  }

  public clearRoutes(key? : number)
  {
    if ( key !== undefined )
    {
      this.mainRoutes.forEach((route : RouteDisplay, id : number) =>
      {
        return route.selected = false;
      });
      this.mainRoutes.get(key).selected = true;
    }

    this.mainChildren = [];
    this.firstChildren = [];
    this.secondChildren = [];
  }

  ngOnInit(): void
  {
    if ( this.routes.size === 0 )
    {
      this.getAllRoutes(this.parentId,'/', this.route.config, 0);
      this.getAllRoutesWithoutException('/', this.route.config);
    }
  }
}

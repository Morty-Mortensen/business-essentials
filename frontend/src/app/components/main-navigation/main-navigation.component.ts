import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {Route, Router} from "@angular/router";
import {RouteDisplay} from "../../domain/RouteDisplay";
import {TitleCasePipe} from "@angular/common";

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



  constructor(private route: Router, public titleCasePipe: TitleCasePipe)
  {
    if ( this.routes.size === 0 )
    {
      this.getAllRoutes(this.parentId,'/', this.route.config, 0);
    }

    console.log(this.routes);
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
    }

    this.secondChildren = [];
  }

  public getSecondChildKey(key : number)
  {
    this.secondChildren = this.routes.get(key);
  }

  public clearRoutes()
  {
    this.mainChildren = [];
    this.firstChildren = [];
    this.secondChildren = [];
  }

  private isValidRoute(path : string)
  {
    return !path.includes("login")
        && !path.includes("register")
        && path !== ''
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

  ngOnInit(): void {

  }

}

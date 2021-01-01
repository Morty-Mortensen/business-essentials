import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-display-box',
  templateUrl: './article-display-box.component.html',
  styleUrls: ['./article-display-box.component.css']
})
export class ArticleDisplayBoxComponent implements OnInit {

  @Input() title : string = ""
  @Input() subtitle : string = ""
  @Input() imageRef : string = ""
  @Input() description : string = ""
  @Input() link : string = ""
  @Input() itemBelow : boolean = false;




  constructor() { }

  ngOnInit(): void {
  }

}

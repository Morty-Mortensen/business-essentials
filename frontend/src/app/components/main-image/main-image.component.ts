import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.css']
})
export class MainImageComponent implements OnInit {

  @Input() image : string = "";
  @Input() normalTextFirstPart : string = "";
  @Input() normalTextSecondPart : string = "";
  @Input() abnormalText : string = "";
  @Input() rightTextDistance : string = "";
  @Input() bottomTextDistance : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}

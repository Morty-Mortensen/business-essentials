import {Component, Input, OnInit} from '@angular/core';
import {faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {SummaryCardDisplay} from "../../../domain/SummaryCardDisplay";

@Component({
  selector: 'app-accounting-bussiness-essentials',
  templateUrl: './accounting-bussiness-essentials.component.html',
  styleUrls: ['./accounting-bussiness-essentials.component.css']
})
export class AccountingBussinessEssentialsComponent implements OnInit {

  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;

  public accountingBusinessEssentialAllOptions : Array<SummaryCardDisplay> = []
  public accountingBusinessEssential3Displayed: Array<SummaryCardDisplay> = []
  private displayedIndex : number = 0;
  private PAGE_SIZE : number = 3;
  private pageNumber : number = 1;


  constructor() { }

  ngOnInit(): void
  {
    // Get business essential info from database.
    this.accountingBusinessEssentialAllOptions.push(
        new SummaryCardDisplay('Title 1', 'Subtitle 1', 'assets/dice.jpg', 'Here is a nice description 1...', '/accounting')
    )
    this.accountingBusinessEssentialAllOptions.push(
        new SummaryCardDisplay('Title 2', 'Subtitle 2', 'assets/dice.jpg', 'Here is a nice description 2...', '/accounting')
    )
    this.accountingBusinessEssentialAllOptions.push(
        new SummaryCardDisplay('Title 3', 'Subtitle 3', 'assets/dice.jpg', 'Here is a nice description 3...', '/accounting')
    )
    this.accountingBusinessEssentialAllOptions.push(
        new SummaryCardDisplay('Title 4', 'Subtitle 4', 'assets/dice.jpg', 'Here is a nice description 4...', '/accounting')
    )
    this.accountingBusinessEssentialAllOptions.push(
        new SummaryCardDisplay('Title 5', 'Subtitle 5', 'assets/dice.jpg', 'Here is a nice description 5...', '/accounting')
    )
    this.accountingBusinessEssentialAllOptions.push(
        new SummaryCardDisplay('Title 6', 'Subtitle 6', 'assets/dice.jpg', 'Here is a nice description 6...', '/accounting')
    )
    this.accountingBusinessEssentialAllOptions.push(
        new SummaryCardDisplay('Title 7', 'Subtitle 7', 'assets/dice.jpg', 'Here is a nice description 7...', '/accounting')
    )

    console.log(this.accountingBusinessEssentialAllOptions);

    this.initializeDisplayCards();
  }

  private paginate(array : Array<SummaryCardDisplay>, pageNumber : number) : Array<SummaryCardDisplay>
  {
    return array.slice((pageNumber - 1) * this.PAGE_SIZE, pageNumber * this.PAGE_SIZE);
  }

  public initializeDisplayCards()
  {
    for ( let i = 0; i < (3 || this.accountingBusinessEssentialAllOptions.length); i++ )
    {
      this.accountingBusinessEssential3Displayed.push(this.accountingBusinessEssentialAllOptions[i]);
      this.displayedIndex++;
    }
  }

  public displayMoreRight()
  {
    if ( this.canDisplayMore() )
    {
      this.accountingBusinessEssential3Displayed = this.paginate(this.accountingBusinessEssentialAllOptions, this.pageNumber + 1);
      this.pageNumber++;
    }
  }

  public canDisplayMore() : boolean
  {
    return (this.pageNumber * this.PAGE_SIZE) < this.accountingBusinessEssentialAllOptions.length;
  }

  public displayMoreLeft()
  {
    if ( this.canDisplayLess() )
    {
      this.accountingBusinessEssential3Displayed = this.paginate(this.accountingBusinessEssentialAllOptions, this.pageNumber - 1);
      this.pageNumber--;
    }
  }

  public canDisplayLess() : boolean
  {
    return this.pageNumber != 1;
  }

}

import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quote: Quote[] = [
    new Quote(1, '"We grow fearless when we do the things we fear."',"Robin Sharma", new Date (2022,2,12))
  ]

  isComplete: any;

  toggleDetails(index: any) {
    this.quote[index].showDescription = !this.quote[index].showDescription
  }

  deleteQuote(complete:boolean){
    this.isComplete.emit(complete)
  }

  quoteDelete(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].quote}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

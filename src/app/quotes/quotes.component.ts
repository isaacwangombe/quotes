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

  toggleDetails(index: any) {
    this.quote[index].showDescription = !this.quote[index].showDescription
  }

  constructor() { }

  ngOnInit(): void {
  }

}

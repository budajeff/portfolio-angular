import { Component, Input, OnInit } from '@angular/core';
import { CardData } from '../card/card-data';
@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() cardsData: CardData[];

  constructor() { 
    this.cardsData = [
      {
        title: 'card name',
        subTitle: 'sub title',
        imageKey: 'none',
        details: ['detail 1', 'detail 2']}];
  }  

  ngOnInit(): void {
  }

}

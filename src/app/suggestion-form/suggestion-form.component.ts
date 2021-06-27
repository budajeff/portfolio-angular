import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.scss']
})
export class SuggestionFormComponent implements OnInit {

  public suggestionData: {name:string, emailAddress:string, comment:string}= {
    comment: '',
    name: '',
    emailAddress: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}

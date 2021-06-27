import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { SuggestionData } from '../suggestion-data';
import { SuggestionServiceService } from '../suggestion-service.service';

@Component({
  selector: 'suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.scss']
})
export class SuggestionFormComponent implements OnInit {

  public suggestionData: SuggestionData = {
    comment: '',
    name: '',
    emailAddress: ''
  }

  constructor(private suggestionService:SuggestionServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.suggestionService
      .postSuggestion(this.suggestionData)
      .subscribe(x => console.log(x));
  }
}

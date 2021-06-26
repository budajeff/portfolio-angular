import { Component, OnInit } from '@angular/core';
import { CardData } from '../card/card-data';
import { SiteDataService } from '../site-data.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  public contactInfo?:CardData;

  constructor(private siteDataService: SiteDataService) { }

  ngOnInit(): void {
    this.contactInfo = {...this.siteDataService.getSiteData().contact[0], imageKey: 'none'};
  }

}

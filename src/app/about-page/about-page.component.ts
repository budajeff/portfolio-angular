import { Component, OnInit } from '@angular/core';
import { SiteDataService } from '../site-data.service';
import { CardData } from '../card/card-data';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  public aboutData: CardData[] = [];

  constructor(private siteDataService: SiteDataService) { }

  ngOnInit(): void {
    this.aboutData = this.siteDataService.getSiteData().about
      .filter(x => x.keywords.includes('Angular'))
      .map(x => {
        return {
          title: x.title,
          subTitle: x.subtitle,
          details: x.details,
          imageKey: x.image
        };
      });
  }

}

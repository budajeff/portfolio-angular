import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { SiteDataService } from '../site-data.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  public aboutData: any;

  constructor(private siteDataService: SiteDataService) { }

  ngOnInit(): void {
    this.aboutData = this.siteDataService.getSiteData().about[0];
  }

}

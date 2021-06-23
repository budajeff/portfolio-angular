import { Component, OnInit } from '@angular/core';
import { SiteDataService } from '../site-data.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent implements OnInit {

  constructor(private siteDataService: SiteDataService) { }

  public experienceData: any;

  ngOnInit(): void {
    this.experienceData = this.siteDataService.getSiteData().experience;
  }

}

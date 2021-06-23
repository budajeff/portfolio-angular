import { Component, OnInit } from '@angular/core';
import { SiteDataService } from '../site-data.service';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent implements OnInit {

  constructor(private siteDataService: SiteDataService) { }

  public skillData: any;

  ngOnInit(): void {
    this.skillData = this.siteDataService.getSiteData().skillAreas.map(skill => {
      return {
        title: skill.name,
        subtitle: skill.subtitle,
        details: skill.details
      }});
    }
}

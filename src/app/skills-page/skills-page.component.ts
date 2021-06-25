import { Component, OnInit } from '@angular/core';
import { SiteDataService } from '../site-data.service';
import { CardData } from '../card/card-data';
@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent implements OnInit {

  constructor(private siteDataService: SiteDataService) { }

  public skillsData: CardData[] =[];

  ngOnInit(): void {
    this.skillsData = this.siteDataService.getSiteData().skillAreas.map(skill => {
      return {
        title: skill.name,
        subtitle: skill.subtitle,
        details: skill.details,
        imageKey: 'none'
      }});
    }
}

import { Component, OnInit } from '@angular/core';
import { SiteDataService } from '../site-data.service';
import { CardData } from '../card/card-data';
@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent implements OnInit {

  constructor(private siteDataService: SiteDataService) { }

  public experiences: CardData[] = [];

  ngOnInit(): void {
    this.experiences = this.siteDataService.getSiteData().experience.map(job => {
      const dateDetail = this.dateRange(job);
      return {
        title: job.title,
        subTitle: job.team,
        details: [dateDetail, ...job.details],
        imageKey: job.image ?? 'none'
      };
    });
  }

  dateRange(job: any) {
    const endDate = job.endDate !== 'present' ? new Date(job.endDate).getFullYear() : 'Present';
    const startDate = new Date(job.startDate).getFullYear();
    const dateDetail = `${startDate} to ${endDate}`;
    return dateDetail;
  }
}

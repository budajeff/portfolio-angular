import { Component, OnInit } from '@angular/core';
import { SiteDataService } from '../site-data.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent implements OnInit {

  constructor(private siteDataService: SiteDataService) { }

  public experiences: any;

  ngOnInit(): void {
    this.experiences = this.siteDataService.getSiteData().experience.map(job => {
      const dateDetail = this.dateRange(job);
      return {
        key: job.title + job.team,
        title: job.title,
        subtitle: job.team,
        details: [dateDetail, ...job.details],
        imageKey: job.image
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

import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private imageService:ImageService) { }

  public image: any;

  ngOnInit(): void {
    const landingImage = this.imageService.getImages()['landing'];
    this.image = {src: landingImage.image, alt: landingImage.alt};
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string = 'title';
  @Input() subTitle?: string = 'subtitle';
  @Input() details?: string[] = ['detail 1', 'detail 2'];
  @Input() imageKey?: string = '';

  public imageSrc?:string = undefined;
  public imageAlt?:string = undefined;

  constructor(private imageService: ImageService) { 
  }

  ngOnInit(): void {
    if(this.imageKey) {
      this.imageSrc = (this.imageService.getImages() as any)[this.imageKey]?.image;
      this.imageAlt = (this.imageService.getImages() as any)[this.imageKey]?.alt;  
    }
  }

}

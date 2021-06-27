import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  private activeMenuText = '';

  constructor() { }

  ngOnInit(): void {
    this.activeMenuText = 'Home';
  }

  public menuItemClicked(event:Event) {
    this.activeMenuText = (event.currentTarget as HTMLElement).innerHTML;
  }

  public isActive(menuText:string) {
    return menuText === this.activeMenuText;
  }
}

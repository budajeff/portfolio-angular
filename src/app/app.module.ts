import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    CardComponent,
    CardsComponent,
    ExperiencePageComponent,
    SkillsPageComponent,
    NavBarComponent,
    ContactPageComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeAllComponent } from './pages/home-all/home-all.component';
import { HomeNewsComponent } from './pages/home-news/home-news.component';
import { HomeSecComponent } from './pages/home-sec/home-sec.component';
import { HomeIpoComponent } from './pages/home-ipo/home-ipo.component';
import { HomeResearchComponent } from './pages/home-research/home-research.component';

import { HomeComponent } from './pages/home/home.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    HomeAllComponent ,
    HomeNewsComponent ,
    HomeSecComponent ,
    HomeIpoComponent ,
    HomeResearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

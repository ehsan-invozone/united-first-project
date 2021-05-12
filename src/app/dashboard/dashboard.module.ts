import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,  './assets/i18n/');
}

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddTrustComponent } from './pages/add-trust/add-trust.component';
import { AddSpacComponent } from './pages/add-spac/add-spac.component';
import { AddAdministrativeDetailsComponent } from './pages/add-administrative-details/add-administrative-details.component';
import { AddDirectorsAndOfficiersComponent } from './pages/add-directors-and-officiers/add-directors-and-officiers.component';
import { AddAdministrativeComponent } from './pages/add-administrative/add-administrative.component';
import { AddOverviewComponent } from './pages/add-overview/add-overview.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    AddAdministrativeComponent,
    AddAdministrativeDetailsComponent,
    AddDirectorsAndOfficiersComponent,
    AddOverviewComponent,
    AddSpacComponent,
    AddTrustComponent,

  ],
  imports: [
    // BrowserModule,
    SharedModule,
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    ChartistModule,
    NgbModule,
    NgxMapboxGLModule,
    NgCircleProgressModule.forRoot({
      responsive: true,
      space: -10,
      innerStrokeColor: '#eee',
      innerStrokeWidth: 10,
      radius: 60,
      animation: true,
      animationDuration: 300,
      outerStrokeWidth: 10,
      title: 'auto',
      titleFontSize: '30px',
      titleFontWeight: 'bold',
      subtitleFontSize: '12px',
      subtitleColor: '#a7afb7',
      showUnits: false,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }})
  ]
})
export class DashboardModule { }

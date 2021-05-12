import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule, CollapseModule, MDBBootstrapModule, WavesModule } from 'angular-bootstrap-md';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { JwPaginationModule } from 'jw-angular-pagination';
import { KeycloakAngularModule } from 'keycloak-angular';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MbscModule } from '@mobiscroll/angular-lite';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AutocompleteLibModule,
    NgbModule,
    ChartsModule,
    Ng2PageScrollModule,
    MdbScrollspyModule,
    WavesModule,
    NgxPaginationModule,
    CollapseModule,
    NgxDatatableModule,
    JwPaginationModule,
    KeycloakAngularModule,
    FullCalendarModule,
    MbscModule, 
    MDBBootstrapModule.forRoot(),
    FormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
     echarts,// or import('./path-to-my-custom-echarts')
    })
    
  ],
  exports:[
    AutocompleteLibModule,
    NgbModule,
    MDBBootstrapModule,
    ChartsModule,
    FormsModule,
    Ng2PageScrollModule,
    MdbScrollspyModule,
    WavesModule,
    NgxPaginationModule,
    CollapseModule,
    NgxDatatableModule,
    JwPaginationModule,
    KeycloakAngularModule,
    FullCalendarModule,
    MbscModule, 
    CalendarModule,
    FlatpickrModule,
    NgxEchartsModule
  ]
})
export class SharedModule { }

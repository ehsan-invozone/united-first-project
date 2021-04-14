import { MbscModule } from '@mobiscroll/angular-lite';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { SpacsComponent } from './spacs/spacs.component';
import { SpacDetComponent } from './spac-det/spac-det.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {FixedMenuComponent} from './fixed-menu/fixed-menu.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { initializeKeycloak } from './util/app.init';
import { CollapseModule,WavesModule } from 'angular-bootstrap-md';
import { JwPaginationModule } from 'jw-angular-pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { ResearchComponent } from './research/research.component';
import { CardnewsComponent } from './cardnews/cardnews.component';
import { BackspacaddComponent } from './backspacadd/backspacadd.component';
import { ToastrModule } from 'ngx-toastr';
import { FixedmenubackComponent } from './fixedmenuback/fixedmenuback.component';
import { BackoverviewaddComponent } from './backoverviewadd/backoverviewadd.component';
import { BacktrustaddComponent } from './backtrustadd/backtrustadd.component';
import { BackadminaddComponent } from './backadminadd/backadminadd.component';
import { BackadmindetailsaddComponent } from './backadmindetailsadd/backadmindetailsadd.component';
import { BackdiraoffaddComponent } from './backdiraoffadd/backdiraoffadd.component';
import { HomeComponent } from './home/home.component';
import { NavbarModule, ButtonsModule } from 'angular-bootstrap-md'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { TableFilterPipe } from './spacs/tableFilter.pipe';
import * as echarts from 'echarts';
import { CalendardatesComponent } from './calendardates/calendardates.component';
import { SpacdatableComponent } from './spacdatable/spacdatable.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin
]);
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}
@NgModule({
 
  declarations: [
    AppComponent,
    TableFilterPipe,
    FooterComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    SpacsComponent,
    SpacDetComponent,
    ChartjsComponent,
    CalendarComponent,
    FixedMenuComponent,
    ResearchComponent,
    CardnewsComponent,
    BackspacaddComponent,
    FixedmenubackComponent,
    BackoverviewaddComponent,
    BacktrustaddComponent,
    BackadminaddComponent,
    BackadmindetailsaddComponent,
    BackdiraoffaddComponent,
    NavbarComponent,
    HomeComponent,
    CalendardatesComponent,
    SpacdatableComponent
  ],
  imports: [ 
    KeycloakAngularModule,
    FullCalendarModule,
    MbscModule, 
    KeycloakAngularModule,
    CommonModule,
    BrowserModule,
    NavbarModule,
    ButtonsModule,
    HttpClientModule,
    AppRoutingModule,
    CollapseModule,
    NgxDatatableModule,
    JwPaginationModule,
    WavesModule,
    NgxPaginationModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    Ng2PageScrollModule,
    MdbScrollspyModule,
  
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ToastrModule.forRoot({
      timeOut:3000,
      progressBar:true,
      closeButton:true,
    }),
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
     echarts,// or import('./path-to-my-custom-echarts')
    }),
    MDBBootstrapModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

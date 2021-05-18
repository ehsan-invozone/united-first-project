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
import {FixedMenuComponent} from './shared/components/fixed-menu/fixed-menu.component';

import { CardnewsComponent } from './shared/components/cardnews/cardnews.component';
import { ToastrModule } from 'ngx-toastr';
// import { initializeKeycloak } from './util/app.init';
import { FixedmenubackComponent } from './shared/components/fixedmenuback/fixedmenuback.component';

import { NavbarModule, ButtonsModule } from 'angular-bootstrap-md';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { SpacsModule } from './spacs/spacs.module';
import { ChartslistModule } from './charts/charts.module';
import { CalendarListModule } from './calendar/calendar.module';
import { ResearchModule } from './research/research.module';
import { SharedModule } from './shared/shared.module';

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
    FooterComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    FixedMenuComponent,
    CardnewsComponent,
    FixedmenubackComponent,
    NavbarComponent
  ],
  imports: [ 
    
    HomeModule,
    SpacsModule,
    ResearchModule,
    CalendarListModule,
    ChartslistModule,
    KeycloakAngularModule,
    CommonModule,
    BrowserModule,
    NavbarModule,
    ButtonsModule,
    HttpClientModule,
    AppRoutingModule,
    
    DashboardModule,
    
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    
    NgbModule,
    SharedModule,
    ToastrModule.forRoot({
      timeOut:3000,
      progressBar:true,
      closeButton:true,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
    })
  ],
  providers: [
    // { // Keycloak auth comment
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeKeycloak,
    //   multi: true,
    //   deps: [KeycloakService],
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

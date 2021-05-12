import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { CalendardatesComponent } from './pages/calendardates/calendardates.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CalendarComponent,CalendardatesComponent],
  imports: [
    CommonModule,
    SharedModule,
    CalendarRoutingModule
  ]
})
export class CalendarListModule { }

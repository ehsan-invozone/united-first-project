import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { SpacsComponent } from './spacs/spacs.component';
import {SpacDetComponent} from './spac-det/spac-det.component';
import { CalendarComponent } from './calendar/calendar.component';
import {ResearchComponent} from './research/research.component';
import { BackspacaddComponent } from './backspacadd/backspacadd.component';
import { BackoverviewaddComponent } from './backoverviewadd/backoverviewadd.component';
import { BacktrustaddComponent } from './backtrustadd/backtrustadd.component';
import { BackadminaddComponent } from './backadminadd/backadminadd.component';
import { BackadmindetailsaddComponent } from './backadmindetailsadd/backadmindetailsadd.component';
import { BackdiraoffaddComponent } from './backdiraoffadd/backdiraoffadd.component';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from './util/app.gard';
import { CalendardatesComponent } from './calendardates/calendardates.component';
import { SpacdatableComponent } from './spacdatable/spacdatable.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'spacedet/:id',component:SpacDetComponent,canActivate:[AuthGuard]},
  { path: 'home',component:HomeComponent ,canActivate:[AuthGuard]},
  { path: 'spacs',component:SpacsComponent ,canActivate:[AuthGuard]},
  { path: 'calendar',component:CalendardatesComponent ,canActivate:[AuthGuard]},
  { path: 'research/:id',component:ResearchComponent ,canActivate:[AuthGuard]},
  { path: 'backspacadd',component:BackspacaddComponent ,canActivate:[AuthGuard]},
  { path: 'backoverviewadd',component:BackoverviewaddComponent ,canActivate:[AuthGuard]},
  { path: 'backtrustadd',component:BacktrustaddComponent ,canActivate:[AuthGuard]},
  { path: 'backadminadd',component:BackadminaddComponent ,canActivate:[AuthGuard]},
  { path: 'backadmindetailsadd',component:BackadmindetailsaddComponent ,canActivate:[AuthGuard]},
  { path: 'backdiraoffadd',component:BackdiraoffaddComponent ,canActivate:[AuthGuard]},
  { path: 'datable',component:SpacdatableComponent,canActivate:[AuthGuard]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

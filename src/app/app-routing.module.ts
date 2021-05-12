import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import {AuthGuard} from './util/app.gard';
import { CalendardatesComponent } from './calendar/pages/calendardates/calendardates.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:"home",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    ,canActivate:[AuthGuard]
  },
  {
    path:"spacs",
    loadChildren: () => import('./spacs/spacs.module').then(m => m.SpacsModule)
    ,canActivate:[AuthGuard]
  },
  {
    path:"calendar",
    loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarListModule)
    ,canActivate:[AuthGuard]
  },
  {
    path:'research/:id',
    loadChildren: () => import('./research/research.module').then(m => m.ResearchModule)
    ,canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

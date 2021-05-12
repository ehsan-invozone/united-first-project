import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacDetComponent } from './pages/spac-det/spac-det.component';
import { SpacdatableComponent } from './pages/spacdatable/spacdatable.component';
import { SpacsComponent } from './pages/spacs/spacs.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "spacs", component: SpacsComponent },
      { path : 'spacedet/:id',component:SpacDetComponent},
      { path: 'datable',component:SpacdatableComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpacsRoutingModule { }

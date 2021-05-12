import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacsRoutingModule } from './spacs-routing.module';
import { SpacsComponent } from './pages/spacs/spacs.component';
import { SpacDetComponent } from './pages/spac-det/spac-det.component';
import { SpacdatableComponent } from './pages/spacdatable/spacdatable.component';
import { SharedModule } from '../shared/shared.module';
import { TableFilterPipe } from './pipes/tableFilter.pipe';


@NgModule({
  declarations: [
    SpacsComponent,
    TableFilterPipe,
    SpacDetComponent,
    SpacdatableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SpacsRoutingModule
  ],
  exports:[
    TableFilterPipe,
    SpacdatableComponent
  ]
})
export class SpacsModule { }

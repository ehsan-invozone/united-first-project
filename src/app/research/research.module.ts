import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResearchRoutingModule } from './research-routing.module';
import { ResearchComponent } from './pages/research/research.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ResearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    ResearchRoutingModule
  ]
})
export class ResearchModule { }

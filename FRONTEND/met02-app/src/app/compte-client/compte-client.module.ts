import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteClientRoutingModule } from './compte-client-routing.module';
import { CompteClientComponent } from './compte-client.component';


@NgModule({
  declarations: [
    CompteClientComponent
  ],
  imports: [
    CommonModule,
    CompteClientRoutingModule
  ]
})
export class CompteClientModule { }

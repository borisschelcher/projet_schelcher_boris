import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RefactorPhoneNumberPipe } from '../refactor-phone-number.pipe';
import { CompteClientRoutingModule } from './compte-client-routing.module';
import { CompteClientComponent } from './compte-client.component';


@NgModule({
  declarations: [
    CompteClientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompteClientRoutingModule
  ]
})
export class CompteClientModule { }

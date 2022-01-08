import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteClientComponent } from './compte-client.component';

const routes: Routes = [{ path: '', component: CompteClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteClientRoutingModule { }

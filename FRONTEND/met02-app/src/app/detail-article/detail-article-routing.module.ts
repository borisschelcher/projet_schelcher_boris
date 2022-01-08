import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailArticleComponent } from './detail-article.component';

const routes: Routes = [{ path: '', component: DetailArticleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailArticleRoutingModule { }

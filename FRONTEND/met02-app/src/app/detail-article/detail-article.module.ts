import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailArticleRoutingModule } from './detail-article-routing.module';
import { DetailArticleComponent } from './detail-article.component';


@NgModule({
  declarations: [
    DetailArticleComponent
  ],
  imports: [
    CommonModule,
    DetailArticleRoutingModule
  ]
})
export class DetailArticleModule { }

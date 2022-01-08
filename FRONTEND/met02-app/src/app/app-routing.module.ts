import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: ' ', loadChildren: () => import('./acceuil/acceuil.module').then(m => m.AcceuilModule) }, { path: 'compte-client', loadChildren: () => import('./compte-client/compte-client.module').then(m => m.CompteClientModule) }, { path: 'catalogue', loadChildren: () => import('./catalogue/catalogue.module').then(m => m.CatalogueModule) }, { path: 'detail', loadChildren: () => import('./detail-article/detail-article.module').then(m => m.DetailArticleModule) }, { path: 'panier', loadChildren: () => import('./panier/panier.module').then(m => m.PanierModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

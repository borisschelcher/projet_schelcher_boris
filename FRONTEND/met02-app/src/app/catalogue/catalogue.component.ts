import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MonservService } from '../monserv.service';
import { Produit } from '../../../shared/models/produit';
import { Store } from '@ngxs/store';
import { AddProduit } from 'shared/actions/product-action';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {


  constructor(private monservService: MonservService, private store : Store) { }

  produit$?: Observable<Array<Produit>>;
  ngOnInit(): void {
    this.produit$ = this.monservService.getCatalogue();
  }
  addProduct(produit : Produit){
    this.store.dispatch(new AddProduit(produit));
  }
}
  
import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../model/products';
import { ProductsService } from '../../service/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
producttInfo !: Array<Iproducts>
selectedProdId !: string
  constructor(
    private _prodSer : ProductsService,
    private _route : ActivatedRoute,
    private _router : Router

  ) { }

  ngOnInit(): void {
   this.producttInfo =this._prodSer.fetchAllProducts();
   this.selectedProdId= this.producttInfo[0].pid;
   this._router.navigate([this.producttInfo[0].pid],{
    relativeTo : this._route,
    queryParams:{canReturn : this.producttInfo[0].canReturn}
   })
  }
  onProductClick(prod:Iproducts){
   this.selectedProdId = prod.pid
  }

}

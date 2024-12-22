import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 productObj ! :Iproducts
 productId ! : string
  constructor(
    private _prodSer : ProductsService,
    private _routes :ActivatedRoute
  ) { }

  ngOnInit(): void {
       this._routes.params
                      .subscribe((params:Params)=>{
                        this.productId = params['productId'];
                        if(this.productId){
                          this.productObj = this._prodSer.fetchProduct(this.productId)!
                        }
                      })
  }


  onRemove(){
    let  getConfirm = confirm('Are you sure ?')
    if(getConfirm){
      this._prodSer.removeProduct(this.productId)
    }
  }

}

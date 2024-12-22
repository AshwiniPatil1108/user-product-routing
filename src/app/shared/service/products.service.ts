import { Injectable } from '@angular/core';
import { Iproducts } from '../model/products';
import { Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productArr: Array<Iproducts> =[
  {
    pname:"Redmi",
    pid:"1",
    pstatus:"In-progress",
    canReturn:1
  },
  {
    pname:"Realme",
    pid:"2",
    pstatus:"Dispatched",
    canReturn:0
  },
  {
    pname:"Samsung",
    pid:"3",
    pstatus:"Delivered",
    canReturn:1
  }
]
  constructor(
    private _router : Router,
    private _snackBar : SnackBarService
  ) { }

  fetchAllProducts(){
    return this.productArr
  }
  fetchProduct(id:string){
    return this.productArr.find(prod => prod.pid=== id)
  }
  postProduct (postObj : Iproducts){
    this.productArr.push(postObj);
    this._router.navigate(['products']);
    this._snackBar.openSnackBar(`New Product ${postObj.pname} is added successfully!!!!`)
  }
  updatedProduct(updatedObj: Iproducts){
    let getIndex = this.productArr.findIndex(prod => prod.pid === updatedObj.pid);
    this.productArr[getIndex]=updatedObj;
    this._router.navigate(['/products', updatedObj.pid],{
      queryParams:{canReturn : updatedObj.canReturn}
    })
    this._snackBar.openSnackBar(`New Product ${updatedObj.pname} is addded successfully!!!`)
  }
  removeProduct(id:string){
    let getIndex = this.productArr.findIndex(prod => prod.pid === id);
    this.productArr.slice(getIndex,1);
    this._router.navigate(['products']);
    this._snackBar.openSnackBar(`The Product is removed successfully!!!`)
  }
}

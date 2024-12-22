import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/service/products.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
productId ! : string;
productInfo !: Iproducts;
productForm !: FormGroup;
isInEdiMode : Boolean = false;
updateBtnFlag : Boolean= false;
  constructor(
    private _prodser : ProductsService,
    private _uuidser : UuidService,
    private _routes : ActivatedRoute
  ) { }

  ngOnInit(): void {
     this.productForm = new FormGroup ({
          pname : new FormControl(null, [Validators.required]),
          pstatus : new FormControl('Candidate', [Validators.required]),
          canReturn:new FormControl('Candidate', [Validators.required]),

        })
        this.productId = this._routes.snapshot.params['productId'];
        if(this.productId){
          this.isInEdiMode= true;
          this.productInfo = this._prodser.fetchProduct(this.productId)!
          this.productForm.patchValue({...this.productInfo, canReturn: this.productInfo.canReturn ? "Yes" : "No"})
        }
        this._routes.queryParams
                          .subscribe((params : Params)=>{
                            if(params['canReturn']=== "0"){
                              this.productForm.disable();
                              this.updateBtnFlag= true;
                            }
                          })
  }
  onProductAdd(){
     if(this.productForm.valid){
          let canreturnVal = this.productForm.controls['canReturn'].value === 'Yes' ? 1:0;
          console.log({...this.productForm.value, canReturn :canreturnVal})
          let obj : Iproducts={
            ...this.productForm.value,
            canReturn:canreturnVal,
            pid: this._uuidser.generateUuid()
          }
          this.productForm.reset()
          this._prodser.postProduct(obj)
        }
  }
  onProductUpdate(){
    if(this.productForm.valid){
   let updatedobj :Iproducts ={
      ...this.productForm.value,
      canreturn :this.productForm.controls['canReturn'].value === 'Yes' ? 1:0,
        pid:this.productId
    }
    console.log(updatedobj);
    this.productForm.reset()
    this._prodser.updatedProduct(updatedobj)
  }
  }
}

import { Component } from '@angular/core';
import { FileHandle } from '../_model/file-handle-model';
import { Product } from '../_model/poduct.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from '../_services/product.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent {

  constructor(private productService:ProductService,
    private sanitizer:DomSanitizer,
    private activatedRoute:ActivatedRoute
    ){}

isNewProduct=true;

product:Product = {
productId: null,
productName:"",
productDescription:"",
productDiscountedPrice:0,
productActualPrice:0,
productImages:[]
}

ngOnInit():void{
this.product  =  this.activatedRoute.snapshot.data['product'];

if(this.product && this.product.productId){
this.isNewProduct = false;
}
}


// addProduct Function
addProduct(productForm:NgForm){

const productFormData = this.prepareFormData(this.product);

this.productService.addProduct(productFormData).subscribe(
(response:Product)=>{
productForm.reset();
this.product.productImages = [];

},(error: HttpErrorResponse)=>{
console.log(error);

}
);
}

prepareFormData(product:Product):FormData{
const formData = new FormData();

formData.append('product', new Blob([JSON.stringify(product)],{type:'application/json'}));

for(let i= 0;i < product.productImages.length; i++){
formData.append('imageFile',product.productImages[i].file,
                        product.productImages[i].file.name);
}
return formData;
}


//Image File Function
onFileSelected(event:any){
if(event.target.files){
const file = event.target.files[0];
const fileHandles:FileHandle = {
file: file,
url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
}
this.product.productImages.push(fileHandles);
}

}

removeImage(i:number){
this.product.productImages.splice(i,1);
}

}

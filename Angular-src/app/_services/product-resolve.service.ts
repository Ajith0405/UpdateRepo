import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { Product } from '../_model/poduct.model';
import { ImageProcessingService } from './image-processing.service';

@Injectable({
  providedIn: 'root'
})

export class ProductResolveService implements Resolve<Product> {

  constructor(private productService:ProductService,
              private imageProcessingService:ImageProcessingService
    ) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id:any = route.paramMap.get("productId");

    if(id){
       return this.productService.getProductDetailsById(id)
       .pipe(
        map(p=>this.imageProcessingService.createImages(p))
       )
    }else{
        return of(this.getProductDetails());
    }
  }

  getProductDetails(){
    return{
      productId:null,
      productName:"",
	    productDescription:"",
	    productDiscountedPrice:0,
	    productActualPrice:0,
      productImages:[]
    }
  }
  
}

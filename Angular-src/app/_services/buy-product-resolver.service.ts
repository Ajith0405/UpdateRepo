import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { Product } from '../_model/poduct.model';
import { ImageProcessingService } from './image-processing.service';
// Import your product service

@Injectable({
  providedIn: 'root'
})
export class BuyProductResolverService implements Resolve<Product[]> {

  constructor(private productService: ProductService,
    private imageProcessingService: ImageProcessingService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Product[] | Observable<Product[]> {
    // Fetch the list of products using your product service

    const id:any = route.paramMap.get("id");

    const isSingleProductCheckout = route.paramMap.get("isSingleProductCheckout");
    return this.productService.getProductDetails(isSingleProductCheckout,id)
    .pipe(
      map(
        (x:Product[], i) => x.map((product:Product) => this.imageProcessingService.createImages(product))
      )
    );
    
  }
}
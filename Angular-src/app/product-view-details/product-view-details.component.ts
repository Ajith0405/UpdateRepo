import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../_model/poduct.model';

@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrls: ['./product-view-details.component.css']
})
export class ProductViewDetailsComponent {

  constructor(private activateRoute:ActivatedRoute,private router:Router){}

  product!: Product;
  selectedProductIndex=0;

    ngOnInit(){
      this.product = this.activateRoute.snapshot.data['product'];
      console.log(this.product);
      
    }

    changeIndex(index:number){
      this.selectedProductIndex = index;
    }

    buyProduct(productId: any){
        this.router.navigate(['/buyProduct',{
          isSingleProductCheckout: true, id:productId
        }]);
    }

    // buyProduct(){
    //   this.router.navigate(["/buyProduct"]);
    // }

}

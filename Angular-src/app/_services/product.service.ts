import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_model/poduct.model';
import { OrderDetails } from '../_model/order-details-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient:HttpClient) { }

  public addProduct(product:FormData){
    return this.httpclient.post<Product>("http://localhost:9007/addNewProduct",product);
  }

  public getAllProducts(){
    return this.httpclient.get<Product[]>("http://localhost:9007/getAllProducts");
  }

  public deleteProduct(productId:any){
    return this.httpclient.delete("http://localhost:9007/deleteProductDetails/"+productId);
  }

  public getProductDetailsById(productId:number){
    return this.httpclient.get<Product>("http://localhost:9007/getProductDetailsById/"+productId);
  }

  public getProductDetails(isSingleProductCheckout:any,productId:any){
    return this.httpclient.get<Product[]>("http://localhost:9007/getProductDetails/"+isSingleProductCheckout+"/"+productId)

  }

  public placeOrdeer(orderDetails:OrderDetails){
    return this.httpclient.post("http://localhost:9007/placeOrder",orderDetails)
  }
}

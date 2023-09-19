import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-product-imgaes-dailog-component',
  templateUrl: './show-product-imgaes-dailog-component.component.html',
  styleUrls: ['./show-product-imgaes-dailog-component.component.css']
})
export class ShowProductImgaesDailogComponentComponent {
  constructor(@Inject(MAT_DIALOG_DATA)public data:any){}

ngOnInit():void{
  this.reciveImage();
}

reciveImage() {
  console.log(this.data);
  
}
}

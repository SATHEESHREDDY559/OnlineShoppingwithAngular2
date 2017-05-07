import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'; 
import { ProductService } from './product-services';
@Component({

moduleId: module.id,
templateUrl:'product-list.component.html',
styleUrls:['product-list.component.css']
//templateUrl:'app/products/product-list.component.html', without moduleId: module.id;
//styleUrls:['app/products/product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    filterProduct: string = "";
    errorMessage: string;
    products:IProduct[];
    constructor(private _productService:ProductService){

    }
    
toggleImage():void{
    this.showImage = !this.showImage;
}
ngOnInit():void{
this._productService.getProducts()
.subscribe(products => this.products = products,
            error => this.errorMessage= <any> error);
}
onRatingClicked(message: string ):void {
    this.pageTitle='Product list:'+message;
}

}
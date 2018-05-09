import {Component, OnInit} from '@angular/core';
import { IProduct } from "./product.model";
import {ProductService} from './product.service'

@Component({
    selector:'prod-comp',
    templateUrl:'./product.component.html',
    //styles:['thead{color:purple}','h3{color:green}']
    styleUrls:['./product.component.css']
})

export class ProductComponent implements OnInit{
    title="@@@@@@@@@Product List";
    filterText;
    showImage=false;
    imageWidth=50;
    errorMessage;
    products:IProduct[]

    constructor(private _productService:ProductService){}

    toggleImage():void{
        this.showImage = !this.showImage
    }

    ngOnInit(): void{
        this._productService.getProducts()
            .subscribe((data) => this.products = data,
                        (err)=> this.errorMessage = err)
    }
    
    onDataReceive(message:string){
        this.title = "@@@@@@Product List"+message
    }
}


/*

string =""
number = 324
boolean =true/false

One way binding
--Data Binding {{}}
--Event Binding ()
--Property Binding []
Two way binding [()]
*/
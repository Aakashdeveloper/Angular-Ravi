import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
    templateUrl:'./product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
    title="Product Detail ";
    productId="Product Id";
    name;
    descrip;
    image;

    constructor(private _route:ActivatedRoute,
                private _router:Router){}

    ngOnInit():void{
        let id = +this._route.snapshot.params['id']
        this.productId += `:${id}`;

        this._route
            .queryParams
            .subscribe((params) =>{
                this.name= params['name'];
                this.descrip= params['desc'];
                this.image=params['img']
            })
    }

    onBack():void{
        this._router.navigate(['/products'])
    }
}


/*
var a = 10;
var b = `my name is ${a}`
var b = "my name is"+a
*/
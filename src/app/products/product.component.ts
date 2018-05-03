import {Component} from '@angular/core';

@Component({
    selector:'prod-comp',
    templateUrl:'./product.component.html'
})

export class ProductComponent{
    title="@@@@@@@@@Product List";
    filterText="leaf"
    showImage=false;
    products:any[]=[
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://image.ibb.co/gC9PfH/dw.jpg"
        }
    ]

    toggleImage():void{
        this.showImage = !this.showImage
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
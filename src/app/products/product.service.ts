import {Injectable} from '@angular/core';
import {IProduct} from './product.model';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ProductService{

    getProducts():IProduct[]{
        return[
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.5,
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
    }
}


/*
a coding pattern in whuch class receives the instnace  of object it needs
from an external source rather than creating itself*/
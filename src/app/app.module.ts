import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from "./products/product.component";
import { CarComponent } from "./car.component";
import { ProductUpper } from "./products/product-upper.pipe";

@NgModule({
    //Modules will come here
    imports:[
        BrowserModule,
        FormsModule
    ],
    //Components & pipe come here
    declarations:[
        AppComponent,
        CarComponent,
        ProductComponent,
        ProductUpper
    ],
    //First Component come here
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{

}
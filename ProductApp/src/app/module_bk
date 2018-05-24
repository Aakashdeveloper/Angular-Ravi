import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { ProductComponent } from "./products/product.component";
import { CarComponent } from "./car.component";
import { ProductUpper } from "./products/product-upper.pipe";
import { ProductFilterPipe } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";
import { NotFoundComponent } from "./shared/notFound.component";
import { OrderComponent } from "./orders/order.component";
import { ProductDetailComponent } from "./products/product-detail.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
    //Modules will come here
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
        
            {path:'products',component:ProductComponent},
            {path:'products/:id',component:ProductDetailComponent},
            {path:'orders',component:OrderComponent},
            {path:'home',component:HomeComponent},
            {path:'', redirectTo:'home', pathMatch:'full'},
            {path:'**',component:NotFoundComponent}

        ])
    ],
    //Components & pipe come here
    declarations:[
        AppComponent,
        CarComponent,
        ProductComponent,
        ProductUpper,
        ProductFilterPipe,
        StarComponent,
        NotFoundComponent,
        HomeComponent,
        OrderComponent,
        ProductDetailComponent
    ],
    //First Component come here
    bootstrap:[
        AppComponent
    ],
    //Service declare here
    providers:[ProductService]
})

export class AppModule{

}
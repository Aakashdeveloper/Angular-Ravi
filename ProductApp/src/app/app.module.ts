import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { NotFoundComponent } from "./shared/notFound.component";
import { OrderComponent } from "./orders/order.component";
import { HomeComponent } from "./home/home.component";
import { ProductModule } from "./products/product.module";

@NgModule({
    //Modules will come here
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductModule,
        RouterModule.forRoot([
            {path:'orders',component:OrderComponent},
            {path:'home',component:HomeComponent},
            {path:'', redirectTo:'home', pathMatch:'full'},
            {path:'**',component:NotFoundComponent}

        ])
    ],
    //Components & pipe come here
    declarations:[
        AppComponent,
        NotFoundComponent,
        HomeComponent,
        OrderComponent
    ],
    //First Component come here
    bootstrap:[
        AppComponent
    ],
    //Service declare here
    providers:[]
})

export class AppModule{

}
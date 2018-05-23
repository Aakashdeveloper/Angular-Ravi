import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'


import { ProductComponent } from "./product.component";
import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductUpper } from "./product-upper.pipe";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductService } from "./product.service";
import { StarComponent } from "../shared/star.component";

@NgModule({
    imports:[
        FormsModule,
        RouterModule.forChild([
            {path:'products',component:ProductComponent},
            {path:'products/:id',component:ProductDetailComponent},
        ])
    ],
    declarations:[
        ProductComponent,
        StarComponent,
        ProductUpper,
        ProductFilterPipe,
        ProductDetailComponent
    ],
    providers:[
        ProductService
    ]
})

export class ProductModule{

}
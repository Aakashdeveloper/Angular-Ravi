import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'

import { ProductComponent } from "./product.component";
import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductUpper } from "./product-upper.pipe";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductService } from "./product.service";
import { SharedModule } from "../shared/shared.module";
 

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products',component:ProductComponent},
            {path:'products/:id',component:ProductDetailComponent},
        ])
    ],
    declarations:[
        ProductComponent,
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
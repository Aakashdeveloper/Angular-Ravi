import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from './product.model'

@Pipe({
    name:"ProductFilter"
})

export class ProductFilterPipe implements PipeTransform{
    transform(value:IProduct[],filterBy:string):IProduct[]{
        filterBy = filterBy?filterBy.toLowerCase():null;
        return filterBy? value.filter((product)=>
                product.productName.toLowerCase().indexOf(filterBy) !==-1):value
    }
}
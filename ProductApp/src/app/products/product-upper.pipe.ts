import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:"MyUpper"
})

export class ProductUpper implements PipeTransform{
    transform(value:string,type:string):string{
        if(type == "upper"){
            value = value.toUpperCase()
        }else{
            value = value.toLowerCase()
        }

        return value
    }
}

/*
function add(a,b){
    return a+b
}

var add = (a,b) => { return a+b}

indexOf
Filter 
*/
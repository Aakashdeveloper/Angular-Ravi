import {Component,OnChanges, Input,
        Output, EventEmitter} from '@angular/core';

@Component({
    selector:'star-comp',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent{
    @Input() rating:number;

    starWidth:number;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()

    ngOnChanges(): void{
        this.starWidth = this.rating*86/5
    }

    onStar():void{
        this.ratingClicked.emit(`The star rating is ${this.rating}`)
    }

}

/*
86/5*4.5

function add(){
    return a+b
}

var sum = add(1,2)

var a = 10
var b = `my age is ${a}`
var c = "my age is "+a

*/
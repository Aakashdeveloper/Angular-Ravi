import {Component} from '@angular/core'

@Component({
    selector:'app-comp',
    template:`<div>
                <h1>This is Angular</h1>
                <prod-comp></prod-comp>
                <car-comp></car-comp>
              </div>`
})

export class AppComponent{

}
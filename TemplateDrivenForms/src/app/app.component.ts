import {Component} from '@angular/core';
import {Employee} from './models/employee.model'

@Component({
  selector:'app-form',
  templateUrl:'./app.component.html'
})

export class AppComponent{
  languages=["NodeJs","AngularJS","ReactJs"]

  model = new Employee('',"Angular",true,",male","NodeJs")

  hasCodeError= false;
  firstToUpper(value:string){
    if(value.length>0){
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1)
    }else{
      this.model.firstName = value
    }
  }

  validateCodeLang(event){
    if(this.model.codelang === "default")
      this.hasCodeError=true
    else
      this.hasCodeError=false
  }
  }

  /*
  ng-pristine ng-untouched ng-invalid
  ng-dirty    ng-touched   ng-valid
  */


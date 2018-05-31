import {Component} from '@angular/core';
import {Employee} from './models/employee.model';

import {NgForm} from '@angular/forms';
import {FormPoster} from './services/form-poster.service'

@Component({
  selector:'app-form',
  templateUrl:'./app.component.html'
})

export class AppComponent{
  languages=["NodeJs","AngularJS","ReactJs"]

  model = new Employee('Ravi',"Angular",'a@a.com',true,"male","NodeJs")

  constructor(private formPoster:FormPoster){}
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

  submitForm(form:NgForm){
    this.formPoster.postEmployeeForm(form.value)
        .subscribe((data) => console.log('success',data),
                    (err) => console.log("error",err))
  }
  }

  /*
  ng-pristine ng-untouched ng-invalid
  ng-dirty    ng-touched   ng-valid
  */


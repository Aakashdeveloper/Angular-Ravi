import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Employee} from '../models/employee.model';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class FormPoster{

    constructor(private http:Http){}

    private extractData(res:Response){
        let body = res.json();
        return body.fields || { }
    }

    private handleError(err:any){
        return Observable.throw(err.statusText)
    }

    postEmployeeForm(employee:Employee):Observable<any>{
       let body = JSON.stringify(employee);
       let headers = new Headers({'Content-Type':'application/json'});
       let options = new RequestOptions({headers:headers});

       return this.http.post('http://localhost:3200/postemployee',body,options)
            .map(this.extractData)
            .catch(this.handleError)
    }
}
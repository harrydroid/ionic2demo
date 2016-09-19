import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the Messages provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Messages {


  constructor(private http: Http) { }
  getUpdatedMessages(): Observable<any> {
    return Observable.create(observable => {
      this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(
        data => {
          observable.next(data.json());
          observable.complete();
        },
        error => {
          console.log("Erro : " + error);
          observable.error(error);
        }
      )
    });
  }

  //   getUpdatedMessages(): Observable<any> {
  //     return Observable.create(observable => {
  //       this.http.get('http://jsonplaceholder.typicode.com/posts').map(data => {
  //         console.log(data.json());
  //         observable.next(data.json());
  //         observable.complete();
  //       });
  //     }
  //  }
}


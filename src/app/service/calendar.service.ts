import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()

export class CalendarService {

  urlConfig = "http://localhost:3000/login";
              
 

   headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }
  //'Access-Control-Allow-Origin':'*',
 
  getTest(){
  

    return this.http.get(this.urlConfig, { 'headers': this.headers }).subscribe({
      next: value => console.log(value),
      error: err => console.error(err),
      complete: () => console.log('DONE!')
  });
  }
  
}



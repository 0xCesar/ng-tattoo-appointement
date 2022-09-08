import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlConfig = "http://localhost:3000/login";
  role: string = 'user';
  urlToGoBack: string = 'home';
  isLoggedIn: boolean = false;



  constructor(private http: HttpClient) { }


  login(loginCli: string, pdwCli: string){
    return this.http.post(this.urlConfig, {'login': loginCli, 'pdw': pdwCli}).subscribe({
      next: value => console.log(value),
      error: err => console.error(err),
      complete: () => this.isLoggedIn = true
  });

  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:  [ AuthService ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: AuthService, private formBuilder: FormBuilder,private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['Léo'],
      password: ['1234']
    })
   }

  ngOnInit(): void {

   
  }

  login(){
    //console.log('Data from form : ', this.loginForm.value.username);
    let res = this.loginService.login(this.loginForm.value.username, this.loginForm.value.password);
    if(this.loginService.isLoggedIn === true){
     this.router.navigateByUrl("/agendas");
    }
  }
  test(){
 //   console.log('  login:  ' + this.sLogin + '  password:  ' + this.sPdw);
  }

}

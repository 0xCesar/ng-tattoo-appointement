import { Component, Input, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/service/calendar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:  [ CalendarService ]
})
export class LoginComponent implements OnInit {

  sLogin: string = '';
  sPdw: string = '';

  constructor(private loginService: CalendarService) { }

  ngOnInit(): void {
  }

  login(){
    let res = this.loginService.login(this.sLogin, this.sPdw);
    console.log(res)
  }

}

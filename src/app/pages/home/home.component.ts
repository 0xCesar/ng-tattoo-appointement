import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class homePage implements OnInit {

  menu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  switchMenuState(){
    this.menu = !this.menu;
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'prompter',
  templateUrl: './prompter.component.html',
  styleUrls: ['./prompter.component.scss']
})
export class PrompterComponent implements OnInit {

  @Input() currentPage: string = "01";
  @Input() _stotalPage: string = "04";
  
  @Input() color: string = "black";

  constructor() { }

  ngOnInit(): void {
  }

}

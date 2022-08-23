import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'line-info',
  templateUrl: './line-info.component.html',
  styleUrls: ['./line-info.component.scss']
})
export class LineInfoComponent implements OnInit {


  @Input() Name: string = "Full Name";
  @Input() TattoZone: string = "TattoZone";
  @Input() date: string = "date"
  @Input() horaire: string = "horaire"

  constructor() { }
  
  ngOnInit(): void {
  }

}

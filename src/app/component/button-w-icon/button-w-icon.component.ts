import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-w-icon',
  templateUrl: './button-w-icon.component.html',
  styleUrls: ['./button-w-icon.component.scss']
})
export class ButtonWIconComponent implements OnInit {

  @Input() buttonName: string = "Dashboard";
  @Input() icon: string = "../../../assets/icon/command.svg";

  constructor() { }

  ngOnInit(): void {
  }

}

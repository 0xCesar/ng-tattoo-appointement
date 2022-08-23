import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'appointement-details',
  templateUrl: './appointement-details.component.html',
  styleUrls: ['./appointement-details.component.scss']
})
export class AppointementDetailsComponent implements OnInit {

  @Input() instagramName: string = "Patteze";
  @Input() phone: string = "0123456789";
  @Input() zoneTattoo: string = "bras avant droit";
  @Input() projetTattoo: string = "Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum";
  @Input() photoInspi: string[] = ["Photo 1","Photo 2"];
    
  constructor() { }

  ngOnInit(): void {
  }

}

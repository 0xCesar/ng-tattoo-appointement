import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendas',
  templateUrl: './agendas.component.html',
  styleUrls: ['./agendas.component.scss']
})
export class AgendasComponent implements OnInit {
  selected: Date | null = null;
  selectedPage: string = "dashboard";

  upcomingAppointment = [
    {"name": "Clement Tranchant","tattoozone": "Bras avant droit", "date": "01/09/2022", "horaire": "12h00"},
    {"name": "Clement Tranchant","tattoozone": "Bras avant droit", "date": "01/09/2022", "horaire": "12h00"},
    {"name": "Clement Tranchant","tattoozone": "Bras avant droit", "date": "01/09/2022", "horaire": "12h00"},
    {"name": "Clement Tranchant","tattoozone": "Bras avant droit", "date": "01/09/2022", "horaire": "12h00"},
    {"name": "Clement Tranchant","tattoozone": "Bras avant droit", "date": "01/09/2022", "horaire": "12h00"}
  ]



  constructor() { }

  ngOnInit(): void {
  }

}

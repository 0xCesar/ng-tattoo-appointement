import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/service/calendar.service';

@Component({
  selector: 'app-agendas',
  templateUrl: './agendas.component.html',
  styleUrls: ['./agendas.component.scss'],
  providers:  [ CalendarService ]
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



  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
  }
  
  testService(){
    let res = this.calendarService.getTest();
    console.log(res);
  }

  testLogin(){
   // let res = this.calendarService.login();
   // console.log(res)
  }

}

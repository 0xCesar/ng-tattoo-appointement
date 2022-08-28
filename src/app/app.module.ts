import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OurWorkPage } from './pages/our-work/our-work.component';
import { FlashPage } from './pages/flash/flash.component';
import { AppointementPage } from './pages/appointement/appointement.component';
import { OurServicePage } from './pages/our-service/our-service.component';
import { homePage } from './pages/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { PrompterComponent } from './component/prompter/prompter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MenuPageComponent } from './component/menu-page/menu-page.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LoginComponent } from './pages/login/login.component';
import { AgendasComponent } from './pages/agendas/agendas.component';
import { AppointementDetailsComponent } from './component/appointement-details/appointement-details.component';
import { LineInfoComponent } from './component/line-info/line-info.component';
import { ButtonWIconComponent } from './component/button-w-icon/button-w-icon.component';
import { SetWeeklySlotsComponent } from './modal/set-weekly-slots/set-weekly-slots.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    
    AppComponent,
    OurWorkPage,
    FlashPage,
    AppointementPage,
    OurServicePage,
    homePage,
    MenuComponent,
    PrompterComponent,
    MenuPageComponent,
    LoginComponent,
    AgendasComponent,
    AppointementDetailsComponent,
    LineInfoComponent,
    ButtonWIconComponent,
    SetWeeklySlotsComponent,
    

  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,

    MatProgressBarModule

  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

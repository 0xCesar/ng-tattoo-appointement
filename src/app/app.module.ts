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

@NgModule({
  declarations: [
    
    AppComponent,
    OurWorkPage,
    FlashPage,
    AppointementPage,
    OurServicePage,
    homePage,
    MenuComponent,
    PrompterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule

  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

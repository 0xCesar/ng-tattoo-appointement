import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointementPage } from './pages/appointement/appointement.component';
import { FlashPage } from './pages/flash/flash.component';
import { homePage } from './pages/home/home.component';
import { OurServicePage } from './pages/our-service/our-service.component';
import { OurWorkPage } from './pages/our-work/our-work.component';

const routes: Routes = [
  {
    path: 'our-work',
    component: OurWorkPage
  },
  {
    path: 'flash',
    component: FlashPage
  }
  ,{
    path: 'our-service',
    component: OurServicePage
  }
  ,{
    path: 'appointement',
    component: AppointementPage
  },
  {
    path: '',
    component: homePage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

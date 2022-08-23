import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'page-appointement',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.scss']
})
export class AppointementPage implements OnInit {

  step1: boolean = true;
  step1Value: string = "e";

  _stepCount: number = 1;

  @ViewChild("largestep1") stepL1: ElementRef | undefined;
  @ViewChild("largestep2") stepL2: ElementRef | undefined;
  @ViewChild("largestep3") stepL3: ElementRef | undefined;
  @ViewChild("progressbar") progressBar: ElementRef | undefined;

  progressbarV: string = "33";
  menu: boolean = false;
  paymentHandler: any = null;
  constructor() {}
  ngOnInit() {
    this.invokeStripe();
  }
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51L3K8tIs3qOuCjB7UDZ9molSPH5WMq9cwYdPPzMEswbXFAFiFKLbtf25lX9q4JmRloVVitJ2Y16Z1A275ySAQ12200TxOk0oZr',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'Appointment Fee',
      description: '3 widgets',
      amount: amount * 100,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51L3K8tIs3qOuCjB7UDZ9molSPH5WMq9cwYdPPzMEswbXFAFiFKLbtf25lX9q4JmRloVVitJ2Y16Z1A275ySAQ12200TxOk0oZr',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
  nextStep(){
    if(this._stepCount === 1){
     
        console.log(this.stepL1);
        this.progressbarV = "66";
 
    
    }
    if(this._stepCount === 2){
     
      console.log(this.stepL1);
      this.progressbarV = "100";
  
  }
  this._stepCount++;

  }
  switchMenuState(){
    this.menu = !this.menu;
  }

}

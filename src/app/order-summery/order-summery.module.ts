import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderSummeryRoutingModule } from './order-summery-routing.module';
import { OrderSummeryComponent } from './components/order-summery.component';


@NgModule({
  declarations: [
    OrderSummeryComponent
  ],
  imports: [
    CommonModule,
    OrderSummeryRoutingModule
  ]
})
export class OrderSummeryModule { }

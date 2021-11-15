import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { CreateComponent } from './create/create.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    CreateComponent,
    CreateComponent,
    OrderDetailComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    CarouselModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }

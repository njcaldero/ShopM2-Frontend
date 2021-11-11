import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { CreateComponent } from './create/create.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    CreateComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    CarouselModule.forRoot()
  ]
})
export class OrdersModule { }

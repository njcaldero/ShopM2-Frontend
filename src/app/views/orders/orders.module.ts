import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { CreateComponent } from './create/create.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent,
    CreateComponent
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

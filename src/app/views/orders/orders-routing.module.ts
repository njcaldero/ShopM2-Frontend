import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Orders'
    },
    children: [
      { path: '', redirectTo: 'orders' },
      { path: 'create', component: CreateComponent, data: { title: 'Create' } },
      { path: 'orders', component: OrdersComponent, data: { title: 'Orders' } },
      { path: 'detail/:id', component: OrderDetailComponent, data: { title: 'Detail' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }

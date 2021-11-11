import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Orders'
    },
    children: [
      { path: '', redirectTo: 'orders' },
      { path: 'create', component: CreateComponent, data: { title: 'Create' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }

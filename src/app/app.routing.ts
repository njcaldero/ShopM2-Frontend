import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Inicio'
    },
    children: [
      {
        path: 'products',
        loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./views/orders/orders.module').then(m => m.OrdersModule)
      }
    ]
  },
 // { path: '**', component:  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

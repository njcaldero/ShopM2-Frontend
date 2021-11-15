import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersDto } from '../../../dto/orders-dto';
import { Status } from '../../../enums/status';
import { Product } from '../../../interfaces/product';
import { HttpUtilService } from '../../../services/http-util.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  product: Product = {};
  orders: OrdersDto[];

  constructor(private httpUtil: HttpUtilService, private router: Router) { }

  ngOnInit(): void {
    this.product = JSON.parse(localStorage.getItem('product'));
    this.loadOrders();
  }

  loadOrders() {
    this.httpUtil.post<OrdersDto[]>('order/getall')
      .subscribe(
        res => {
          this.orders = res;
        },
        err => console.log('HTTP Error', err)
      );
  }

  getStatus(idStatus: number) {
    return Status[idStatus];
  }

  goOrderDetail(idOrder: number) {
    this.router.navigate(['/orders/detail', idOrder]);
  }

}

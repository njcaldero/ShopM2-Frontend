import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersDto } from '../../../dto/orders-dto';
import { Status } from '../../../enums/status';
import { Product } from '../../../interfaces/product';
import { HttpUtilService } from '../../../services/http-util.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  product: Product = {};
  order: OrdersDto = {};
  idOrder;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute, private httpUtil: HttpUtilService, private router: Router) {
    this.idOrder = route.snapshot.paramMap.get('id');
    this.loadOrderDetail();
  }

  ngOnInit(): void {
    this.product = JSON.parse(localStorage.getItem('product'));
  }

  loadOrderDetail() {
    this.httpUtil.post<OrdersDto>('order/GetById', { "id": this.idOrder })
      .subscribe(
        res => {
          this.order = res;
          this.loaded = true;
        },
        err => console.log('HTTP Error', err)
      );

  }

  getStatus(idStatus: number) {
    return Status[idStatus];
  }

  goToPay() {
    window.location.href = 'http://www.google.com.co';
  }



}

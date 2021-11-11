import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../interfaces/product';
import { HttpUtilService } from '../../../services/http-util.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']

})
export class ProductComponent implements OnInit {

  product: Product = {};

  constructor(private httpUtil: HttpUtilService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.httpUtil.post<Product[]>('api/v1/product/getall')
      .subscribe(data => {
        this.product = data[0];
      });
  }

  buy(){
    localStorage.setItem("product", JSON.stringify(this.product));
    this.router.navigate(['/orders/create']);
  }

}



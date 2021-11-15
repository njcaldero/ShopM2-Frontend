import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../../util/custom-validators';
import { HttpUtilService } from '../../../services/http-util.service';
import { CreateOrderDto } from '../../../dto/create-order-dto';
import { Customer } from '../../../interfaces/customer';
import { OrderDetail } from '../../../interfaces/order-detail';
import { Status } from '../../../enums/status';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  formCustomer: FormGroup;
  product: Product = {};
  createOrderDto = new CreateOrderDto();
  orderDetail: OrderDetail = {};

  constructor(private formBuilder: FormBuilder, private httpUtil: HttpUtilService, private router: Router) { }

  ngOnInit(): void {
    this.loadProduct();
    this.buildForm();
  }

  loadProduct() {
    this.product = JSON.parse(localStorage.getItem('product'));
  }

  buildForm() {
    this.formCustomer = this.formBuilder.group({
      name: ['', [Validators.maxLength(120), Validators.pattern('[ñÑáÁéÉíÍóÓúüÚÜa-zA-Z ]*'), Validators.required]],
      address: ['', [Validators.maxLength(120), Validators.required]],
      email: ['', [Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$'), Validators.maxLength(65), Validators.required]],
      mobile: ['', [Validators.minLength(7), Validators.maxLength(10), CustomValidators.validationPhoneNumber, Validators.required]]
    });
  }

  onSubmit() {
    // console.log(this.formCustomer);
    if (this.formCustomer.valid) {
      let listOrderDetail: OrderDetail[] = [];
      const customer: Customer = this.formCustomer.getRawValue();
      this.createOrderDto.Customer = customer;

      this.orderDetail.IdProduct = this.product.Id;
      this.orderDetail.Price = this.product.Price;
      this.orderDetail.Quantity = 1;
      this.orderDetail.TotalPrice = this.product.Price;

      listOrderDetail.push(this.orderDetail);
      this.createOrderDto.OrderDetails = listOrderDetail;

      this.createOrderDto.IdStatus = Status.Unpaid;

      this.httpUtil.post<CreateOrderDto>('order/create', this.createOrderDto)
        .subscribe(
          res => {
            sessionStorage.setItem('orderDetailTemp', JSON.stringify(res));
            this.router.navigate(['/orders/detail', res.Id]);
          },
          err => console.log('HTTP Error', err)
        );
    } else {

      alert("fail");
    }
  }

}

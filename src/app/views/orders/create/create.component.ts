import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  product: Product = {};

  constructor() { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
   this.product= JSON.parse(localStorage.getItem('product'));
  }

  save(){
    alert('ok');
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpUtilService } from '../../../services/http-util.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-turnero',
  templateUrl: './turnero.component.html',
  styleUrls: ['./turnero.component.scss']
})
export class TurneroComponent implements OnInit {

  constructor(private http: HttpUtilService) { }

  ngOnInit(): void {
    console.log('Init component');
    this.http.post('api/v1/order/getall');
  }

}

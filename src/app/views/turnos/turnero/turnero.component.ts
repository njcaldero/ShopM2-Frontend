import { Component, OnInit } from '@angular/core';
import { HttpUtilService } from '../../../services/http-util.service';

@Component({
  selector: 'app-turnero',
  templateUrl: './turnero.component.html',
  styleUrls: ['./turnero.component.scss']
})
export class TurneroComponent implements OnInit {

  constructor(private http: HttpUtilService) { }

  ngOnInit(): void {
  
  }

}

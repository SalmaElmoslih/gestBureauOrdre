import { Component, OnInit } from '@angular/core';
import { CourierMockService } from './courier.mock.service';
import { Courier } from '../shared/courier';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.css']
})
export class CourierComponent implements OnInit {

  couriers !: Courier[] ;

  constructor(private courierService: CourierMockService ) {}

  ngOnInit() {
    this.couriers = this.courierService.getCouriers();
  }
}

import { Injectable } from '@angular/core';
import { Courier } from '../shared/courier';

@Injectable()
export class CourierMockService {
  private COURIERS: Courier[] = [];

  constructor() {
    let c1: Courier = new Courier('26/08/2024', 1, "dest", "exp", "courierDep");
    let c2: Courier = new Courier('26/08/2024', 2, "dest", "exp", "courierDep");
    let c3: Courier = new Courier('26/08/2024', 3, "dest", "exp", "courierDep");
    this.COURIERS.push(c1);
    this.COURIERS.push(c2);
    this.COURIERS.push(c3);
  }

  public getCouriers(): Courier[] { // Correction du nom de la méthode
    return this.COURIERS;
  }
}

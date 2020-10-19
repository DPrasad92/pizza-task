import { EventEmitter, Injectable } from '@angular/core';
import { DPCAppiness } from './order-list/order-list.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  userDetails = new EventEmitter();
  toBeSend: DPCAppiness = {
    customerName: null,
    noOFItems: null,
    totalAmount: null,
    itemName: null,
    itemPrice: null,
    status: null,
    changeStatus: null,
    deliveryAddress: null,
  };
  constructor() {
  }

  sendUserDetails(element: any): void {
    this.toBeSend.customerName = element.customerName;
    this.toBeSend.noOFItems = element.noOFItems;
    this.toBeSend.totalAmount = element.totalAmount;
    this.toBeSend.itemName = element.itemName;
    this.toBeSend.itemPrice = element.itemPrice;
    this.toBeSend.status = element.status;
    this.toBeSend.changeStatus = element.changeStatus;
    this.toBeSend.deliveryAddress = element.deliveryAddress;
    this.userDetails.emit(this.toBeSend);
  }
}

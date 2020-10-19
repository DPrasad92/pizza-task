import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { DPCAppiness } from '../order-list/order-list.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  public userDetails: DPCAppiness;
  customerName: string;
  hello: any;
  temp: any;

  tableBody: any;


  constructor(private commonService: CommonService) {
    this.hello = 'adsfasdf';
  }

  ngOnInit(): void {
    // this.commonService.userDetails.subscribe((response: any) => {
    //   console.log('response is ', response);
    //   this.customerName = '';
    //   if (response !== undefined) {
    //     this.userDetails = response;
    //     console.log('userDetails is ', this.userDetails.customerName);
    //     console.log('userDetails is ', this.userDetails);
    //     this.customerName = this.userDetails.customerName;
    //     console.log('this.customerName is ', this.customerName);
    //   }

    //   if (this.customerName !== '') {
    //     this.temp = this.customerName;
    //   }
    // }, () => {
    //   console.log('this.userDetails is last ', this.userDetails);
    // });

    this.userDetails = this.commonService.toBeSend;
    this.userDetails.customerName = this.commonService.toBeSend.customerName;
    this.userDetails.noOFItems = this.commonService.toBeSend.noOFItems;
    this.userDetails.totalAmount = this.commonService.toBeSend.totalAmount;
    this.userDetails.itemName = this.commonService.toBeSend.itemName;
    this.userDetails.itemPrice = this.commonService.toBeSend.itemPrice;
    this.userDetails.status = this.commonService.toBeSend.status;
    this.userDetails.changeStatus = this.commonService.toBeSend.changeStatus;
    this.userDetails.deliveryAddress = this.commonService.toBeSend.deliveryAddress;

    const itemNames = this.userDetails.itemName;
    const itemPrice = this.userDetails.itemPrice;

    const tabBod = [];
    if (itemNames !== null) {

      for (let i = 0; i < itemNames.length; i++) {
        let tempBody = { name: null, price: null };
        tempBody.name = itemNames[i];
        tempBody.price = itemPrice[i];
        tabBod.push(tempBody);
      }
    }
    if (tabBod.length > 0) {
      this.tableBody = tabBod;
    }
  }

}

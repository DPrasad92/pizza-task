import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

declare var require: any;

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, AfterViewInit {

  orderListTableData: any;
  displayedColumns: string[] = ['customerName', 'noOFItems', 'totalAmount', 'status', 'changeStatus'];
  @ViewChild('tablePage', {read: MatPaginator}) paginator: MatPaginator;
  @ViewChild('tableSort', {read: MatSort}) sort: MatSort;

  constructor(
    private router: Router,
    private commonService: CommonService) {
    const emptyArray = require('./../../assets/orderDetailsJson.json');

    for (const eachItem of emptyArray) {
      eachItem.statusCls = eachItem.status.replace(/\s/g, '');
    }
    this.orderListTableData = new MatTableDataSource(emptyArray);

  }

  ngAfterViewInit() {
    this.orderListTableData.sort = this.sort;
    this.orderListTableData.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

  changeStatus(row: any): void {
    row.status = row.status === 'Order Received' ? 'Preparing' : row.status === 'Preparing' ? 'Ready to serve' : 'Ready to serve';
    row.statusCls = row.statusCls === 'OrderReceived' ? 'Preparing' : row.statusCls === 'Preparing' ? 'Readytoserve' : 'Readytoserve';
  }

  goToDetails(element: any): void {
    this.commonService.sendUserDetails(element);
    // this.toChild.emit(element);
    this.router.navigateByUrl('/orderDetails');
  }

}

export interface DPCAppiness {
  customerName: string;
  noOFItems: string;
  totalAmount: string;
  itemName: any;
  itemPrice: any;
  status: string;
  changeStatus: string;
  deliveryAddress: string;
}

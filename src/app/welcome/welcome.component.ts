import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface OrderReceived {
  customerName: string;
  noOFItems: string;
  totalAmount: string;
  status: string;
  changeStatus: string;
}

declare var require: any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  searchField: string;

  constructor() {
    this.searchField = '';
  }

  ngOnInit(): void {
  }
}

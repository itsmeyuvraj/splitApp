import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-component',
  templateUrl: './transaction-component.component.html',
  styleUrls: ['./transaction-component.component.scss']
})
export class TransactionComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  range=[1,2,3,4,5]

}

export class TabLayout{}

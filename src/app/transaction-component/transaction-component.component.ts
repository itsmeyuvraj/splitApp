import { card } from 'src/app/card';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-transaction-component',
  templateUrl: './transaction-component.component.html',
  styleUrls: ['./transaction-component.component.scss']
})
export class TransactionComponentComponent  {

  cards=card;
  

  range=[1,2,3,4,5];

 


}







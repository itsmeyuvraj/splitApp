//import { card } from 'src/app/transaction-component/card';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-transaction-component',
  templateUrl: './transaction-component.component.html',
  styleUrls: ['./transaction-component.component.scss']
})
export class TransactionComponentComponent implements OnInit  {

  //constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  
  card=[

    {
      name: 'Grocery',
      desc: 'Transaction failed'
    },
    {
      name: 'Dominoz',
      desc: 'Recieved 20 rs from Yuvraj'
    },
    {
      name: 'KFC',
      desc: 'Recieved 10 rs from Meenank'
    },
    {
      name: 'Beer',
      desc: 'Sent 200 rs to Sohan'
    },
    {
      name: 'Dunzo',
      desc: 'Sent 100 rs to Subhajit'
    }
  
   
  
  ];
 


}







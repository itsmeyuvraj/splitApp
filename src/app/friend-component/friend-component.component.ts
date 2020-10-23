import { AddExpenseComponentComponent } from './../add-expense-component/add-expense-component.component';
import { AddFriendsComponentComponent} from './../add-friends-component/add-friends-component.component';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
//import {amount} from './../ds';






@Component({
  selector: 'app-friend-component',
  templateUrl: './friend-component.component.html',
  styleUrls: ['./friend-component.component.scss']
})
export class FriendComponentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
// names=['Yuvraj Sharma','Sohan Basak','Subhajit saha','Meenank Meenu']
friend=[
  {
    name: 'Yuvraj'
  }
  ,
  {
    name: 'Subhajit'
  },
  {
    name: 'Sohan'
  },
  {
    name: 'Meenank'
  },
  {
    name: 'Rajdeep'
  }


]
amount=[

  {
    number: 22
  }
  ,
  {
    number: 22
  },
  {
    number: 22
  },
  {
    number: 22
  },
  {
    number: 22
  }

]


openDialog(): void {
  const dialogRef = this.dialog.open(AddFriendsComponentComponent, {
    width: '250px',
    
  });

  
}
openExpense(): void {
  const dialogRef = this.dialog.open(AddExpenseComponentComponent, {
    width: '250px',
    
  });
}
}
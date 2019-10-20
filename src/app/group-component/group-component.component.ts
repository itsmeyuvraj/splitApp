import { AddGroupComponentComponent } from './../add-group-component/add-group-component.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-group-component',
  templateUrl: './group-component.component.html',
  styleUrls: ['./group-component.component.scss']
})
export class GroupComponentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
group=['KFC','Dominos','Dmart','Groceries','Beer','Coffee'];

openDialog(): void {
  const dialogRef = this.dialog.open(AddGroupComponentComponent, {
    width: '250px',
    
  });
}
}

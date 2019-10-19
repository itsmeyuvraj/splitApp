import { AddFriendsComponentComponent } from './../add-friends-component/add-friends-component.component';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-friend-component',
  templateUrl: './friend-component.component.html',
  styleUrls: ['./friend-component.component.scss']
})
export class FriendComponentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
names=['Yuvraj Sharma','Sohan Basak','Subhajit saha','Meenank Meenu']
amount=[123,456,678,908]

openDialog(): void {
  const dialogRef = this.dialog.open(AddFriendsComponentComponent, {
    width: '250px',
    
  });
}
}
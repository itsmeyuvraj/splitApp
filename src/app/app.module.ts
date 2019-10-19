import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionComponentComponent } from './transaction-component/transaction-component.component';
import { GroupComponentComponent } from './group-component/group-component.component';
import { AddExpenseComponentComponent } from './add-expense-component/add-expense-component.component';
import { AddGroupComponentComponent } from './add-group-component/add-group-component.component';
import { AddFriendsComponentComponent } from './add-friends-component/add-friends-component.component';
import { FriendComponentComponent } from './friend-component/friend-component.component';
import { MaterialModule} from './material';



@NgModule({
  declarations: [
   
    
    AppComponent,
    TransactionComponentComponent,
    GroupComponentComponent,
    AddExpenseComponentComponent,
    AddGroupComponentComponent,
    AddFriendsComponentComponent,
    FriendComponentComponent,

    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
    {path: 'transactions' ,component: TransactionComponentComponent},
    {path: 'friends' ,component: FriendComponentComponent},
    {path: 'groups' ,component: GroupComponentComponent},
    {path: 'addfriend', component: AddFriendsComponentComponent}


      ]
    )


    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

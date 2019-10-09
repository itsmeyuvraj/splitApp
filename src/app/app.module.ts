import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionComponentComponent } from './transaction-component/transaction-component.component';
import { GroupComponentComponent } from './group-component/group-component.component';
import { AddExpenseComponentComponent } from './add-expense-component/add-expense-component.component';
import { AddGroupComponentComponent } from './add-group-component/add-group-component.component';
import { AddFriendsComponentComponent } from './add-friends-component/add-friends-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TransactionComponentComponent,
    GroupComponentComponent,
    AddExpenseComponentComponent,
    AddGroupComponentComponent,
    AddFriendsComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

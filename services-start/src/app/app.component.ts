import { Component, OnInit } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  [x: string]: any;
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountService) {}

  ngOnInit(): void {
      this.accounts = this.accountsService.accounts;
  }

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}

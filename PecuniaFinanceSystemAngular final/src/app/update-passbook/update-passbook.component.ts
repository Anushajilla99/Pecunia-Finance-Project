import { Component, OnInit } from '@angular/core';
import { MyserviceService, Transaction } from '../myservice.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-passbook',
  templateUrl: './update-passbook.component.html',
  styleUrls: ['./update-passbook.component.css']
})
export class UpdatePassbookComponent implements OnInit {
  transactions: Transaction[];
  account: Account;
  transac: any;
  accountId: String;
  message: String
  result: string;
  constructor(private service: MyserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  update() {
    this.service.accountValidation(this.accountId).subscribe((data) => {
      this.result = data;
      if (this.result=="true") {
        console.log(this.accountId);
        this.service.updatePassbook(this.accountId).subscribe((data) => {
          this.transac = data;
          this.transactions = this.transac;
          console.log('transactions', this.transactions);
          if (this.transac == 0) {
            console.log("null values");
            alert("No transactions Present!!");
          }
          else {
            console.log("not null values");
            console.log('transactions', (this.transactions));
            this.router.navigate(['/response'], { queryParams: { accountId: this.accountId, transactions: JSON.stringify(this.transactions) } });
          }
        });
      }
      else {
        alert("No AccountId Present!!");
      }
    });
  }
}


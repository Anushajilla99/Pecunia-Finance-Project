import { Component, OnInit } from '@angular/core';
import { MyserviceService, Transaction } from '../myservice.service'
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {
  transactions: Transaction[];
  transac: any;
  accountId: String;
  StartDate: Date;
  EndDate: Date;
  message: String;
  result: String;

  constructor(private service: MyserviceService, private router: Router) { }
  //Error Display
  error: any = { isError: false, errorMessage: '' };
  isValidDate: boolean;

  ngOnInit(): void {
  }

  // onSubmit(){ 
  //   this.isValidDate = this.validateDates(this.StartDate,this.EndDate);
  // }


  summary() {
    this.isValidDate = this.validateDates(this.StartDate, this.EndDate);
    if (this.isValidDate == true) {
      this.service.accountValidation(this.accountId).subscribe((data) => {
        this.result = data;
        if (this.result == "true") {
          console.log(this.accountId, this.StartDate, this.EndDate);
          this.service.accountSummary(this.accountId, this.StartDate, this.EndDate).subscribe((data) => {
            this.transac = data;
            this.transactions = this.transac;
            if (this.transac == 0) {
              console.log("null values");
              alert("No Transactions Present!!");
            }
            else {
              console.log("not null values");
              this.router.navigate(['/response'], { queryParams: { accountId: this.accountId, transactions: JSON.stringify(this.transactions), } });

            }
          });

        }
        else {
          alert("No AccountId Present!!");
        }
      });

    }

  }
  validateDates(sDate: any, eDate: any): any {
    this.isValidDate = true;
    if ((sDate == null || eDate == null)) {
      this.error = { isError: true, errorMessage: 'Start date and end date are required.' };
      this.isValidDate = false;
    }

    if ((sDate != null && eDate != null) && (eDate) < (sDate)) {
      this.error = { isError: true, errorMessage: 'End date should be grater then start date.' };
      this.isValidDate = false;
    }
    return this.isValidDate;
  }
}
import { Component , OnInit } from '@angular/core';
//import { TransactionService } from './transaction-service';
import { Transaction, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
@Component({
    selector: 'del-transaction',
    templateUrl: './transaction-component copy.html'
})
export class TransactionComponent implements OnInit
{
   message:string;
constructor(private tservice: MyserviceService,private router: Router) { }

ngOnInit(): void {
}
onSubmit(debitslip:Transaction):any{
  console.log(debitslip);
   this.tservice.creditUsingSlip(debitslip).subscribe(data => {
    this.message=data});
  
}
}
   


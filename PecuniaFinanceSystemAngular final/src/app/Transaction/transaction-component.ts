import { Component , OnInit } from '@angular/core';
//import { TransactionService } from './transaction-service';
import { Transaction, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
@Component({
    selector: 'add-transaction',
    templateUrl: './transaction-component.html'
})
export class TransactionComponent implements OnInit
{
   message:string;
constructor(private tservice: MyserviceService,private router: Router) { }

ngOnInit(): void {
}
onSubmit(creditslip:Transaction):any{
  console.log(creditslip);
   this.tservice.creditUsingSlip(creditslip).subscribe(data => {
    this.message=data});
  
}
}
   


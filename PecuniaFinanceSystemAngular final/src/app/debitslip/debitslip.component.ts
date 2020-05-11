import { Component, OnInit } from '@angular/core';
import { Transaction, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debitslip',
  templateUrl: './debitslip.component.html',
  styleUrls: ['./debitslip.component.css']
})
export class DebitslipComponent implements OnInit {

  
   message:string;
constructor(private tservice: MyserviceService,private router: Router) { }

ngOnInit(): void {
}
onSubmit(debitslip:Transaction):any{
  console.log(debitslip);
   this.tservice.debitUsingSlip(debitslip).subscribe(data => {
    this.message=data});
  
}
}

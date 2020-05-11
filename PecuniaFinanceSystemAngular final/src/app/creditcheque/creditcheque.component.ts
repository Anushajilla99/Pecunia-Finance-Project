import { Component, OnInit } from '@angular/core';
import { Transaction, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
//import { Cheque } from '../Transaction/cheque';
//import { Cheque } from '../Transaction/cheque';

@Component({
  selector: 'app-creditcheque',
  templateUrl: './creditcheque.component.html',
  styleUrls: ['./creditcheque.component.css']
})
export class CreditchequeComponent implements OnInit {
  //cheque:Cheque;
message:string;
constructor(private tservice: MyserviceService,private router: Router) { }

ngOnInit():void{
}
onSubmit(creditcheque:Transaction):any{
  console.log(creditcheque);
   this.tservice.creditUsingCheque(creditcheque).subscribe(data => {
    this.message=data});
  
}
}




import { Component, OnInit } from '@angular/core';
import { Transaction, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-debitcheque',
  templateUrl: './debitcheque.component.html',
  styleUrls: ['./debitcheque.component.css']
})
export class DebitchequeComponent implements OnInit {


  message:string;
  constructor(private tservice: MyserviceService,private router: Router) { }
  
  ngOnInit():void{
  }
  onSubmit(debitcheque:Transaction):any{
    console.log(debitcheque);
     this.tservice.debitUsingCheque(debitcheque).subscribe(data => {
      this.message=data});
    
  }
  }
  
  
  
  

  

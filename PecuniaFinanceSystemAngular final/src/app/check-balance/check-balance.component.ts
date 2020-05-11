import { Component, OnInit } from '@angular/core';
import { MyserviceService, Accounts } from '../myservice.service';

import { Router } from '@angular/router';
import { Transaction } from '../Transaction/transaction';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent implements OnInit {

    message:string;
    constructor(private tservice: MyserviceService,private router: Router) { }
    
    ngOnInit():void{
    }
    onSubmit(checkbalance:Accounts):any{
      console.log(checkbalance.accountNumber);
       this.tservice.getbalance(checkbalance.accountNumber).subscribe(data => {
        this.message=data});
      
    }
    }
  
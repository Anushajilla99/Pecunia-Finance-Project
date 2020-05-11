import { Component, OnInit } from '@angular/core';
import { LoanDisbursal, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loanrejected',
  templateUrl: './loanrejected.component.html',
  styleUrls: ['./loanrejected.component.css']
})
export class LoanrejectedComponent implements OnInit {
  loanrejects:LoanDisbursal[];
  constructor(private myservice: MyserviceService,private router: Router) { }
  ngOnInit(): void {
    this.getAllRejected();
  }
  getAllRejected() {
   if(!this.myservice.getAllRejected())
   {
     this.myservice.getRejectsInitially().subscribe((requestsFetched)=>{
     this.loanrejects = requestsFetched;
     this.myservice.setRejectsInitially(this.loanrejects);
     },(error)=>console.log(error));
   }
   {
     this.loanrejects=this.myservice.getAllRejected();
   }
  }
}

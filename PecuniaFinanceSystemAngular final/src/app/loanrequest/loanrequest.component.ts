import { Component, OnInit } from '@angular/core';
import { LoanRequests, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loanrequest',
  templateUrl: './loanrequest.component.html',
  styleUrls: ['./loanrequest.component.css']
})
export class LoanrequestComponent implements OnInit {
  message: any;
  req: LoanRequests = new LoanRequests();

  constructor(private myservice: MyserviceService, private router: Router) { }
  public loanRequest(): any {

    this.myservice.loanRequest(this.req).subscribe(data => {
      this.message = data
    });
  }

  ngOnInit(): void {
  }

}

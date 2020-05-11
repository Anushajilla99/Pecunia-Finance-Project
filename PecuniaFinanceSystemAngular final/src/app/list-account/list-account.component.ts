import { Component, OnInit } from '@angular/core';
import { MyserviceService, Accounts } from '../myservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  message: string;
  accounts: Accounts[];
  constructor(private myservice: MyserviceService, private router: Router) {
  }

  ngOnInit(): any {
    this.myservice.getAllAccounts().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.accounts = response;
  }
 /* update(updateaccount: Accounts) {
    this.myservice.update(updateaccount);
    this.router.navigate(['/updateacc']); 
  }
  deleteByAccountnum(deleteaccount: Accounts): any {
    this.myservice.deleteByAccountnum(deleteaccount.accountNumber).subscribe(data => {
      this.message = data
    });
    this.router.navigate(['/listacc']);
  }*/
}

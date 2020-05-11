/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
import { Component, OnInit } from '@angular/core';
import { MyserviceService, Accounts } from '../myservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
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
  update(updateaccount: Accounts) {
    this.myservice.update(updateaccount);
    this.router.navigate(['/updateacc']); 
  }
  deleteByAccountnum(deleteaccount: Accounts): any {
    this.myservice.deleteByAccountnum(deleteaccount.accountNumber).subscribe(data => {
      this.message = data
    });
    this.router.navigate(['/app-add-user']);
  }
}

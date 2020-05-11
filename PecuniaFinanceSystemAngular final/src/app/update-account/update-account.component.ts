import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Accounts } from '../myservice.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  obj1: any;
  accounts: Accounts[];
  message: string;
  constructor(private myservice: MyserviceService, private router: Router) {
    this.obj1 = this.myservice.updateMethod();
  }
  onUpdate(uaccount: Accounts): any {
    return this.myservice.onUpdate(uaccount).subscribe(data => {
      this.message = data
    });
  }
  ngOnInit(): void {
  }

}

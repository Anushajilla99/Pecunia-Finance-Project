import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Accounts } from '../myservice.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  message: string;

  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(addacc:Accounts):any{
    console.log(addacc);
     this.myservice.accountCreation(addacc).subscribe(data => {
      this.message=data});
  }

}

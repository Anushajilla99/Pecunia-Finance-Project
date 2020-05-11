import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {MyserviceService,customerdata} from '../Myservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message: string;
  constructor(private ser:MyserviceService,private router:Router) { }
  ngOnInit(): void {
  }
  onSubmit(addemp:customerdata):any{
    console.log(addemp);
     this.ser.addUser(addemp).subscribe(data => {
      this.message=data 
    });
      
  }

}

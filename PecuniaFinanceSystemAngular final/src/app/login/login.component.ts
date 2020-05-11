import { Component, OnInit } from '@angular/core';
import { MyserviceService, customerdata } from '../Myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private ser:MyserviceService,private router:Router) { }

  
  ngOnInit(): void {
  }
  onSubmit(u:customerdata){
    console.log(u);
    this.ser.login(u).subscribe(
      users=>{
        console.log(users);
        if(users=="admin")
            this.router.navigate(['app-add-user']);
        else if(users=="customer"){
             this.router.navigate(['app-home']);}
        else if(users=="no")
           return alert("Enter correct credentials");
      }
    );
  }


      


}

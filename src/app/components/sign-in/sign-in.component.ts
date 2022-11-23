import { Component, Input, OnInit } from "@angular/core";
import { User } from "src/app/shared/models/user.model";
import { UserService } from "src/app/shared/services/user.service";
import { Router } from "@angular/router";
//import { SignInComponent } from "../sign-in/sign-in.component";


@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
   user:User = new User() 
   constructor(private userService:UserService,
    private router:Router){}

    
   ngOnInit(): void {
       this.user.emailUser=""
       this.user.lastNameUser="ORELI"
     //  this.addUser()
       this.userService.addUser(this.user).subscribe(
        res=>console.log(res)
       )
   }
   addUser()
   {
    this.userService.addUser(this.user).subscribe(
        res=>{console.log(res)},
        err=>{console.log(err)}
    )
   }
   goRegister(){
    this.router.navigate(['/addUser'])
   }
}

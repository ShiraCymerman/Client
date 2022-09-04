import { Component, Input, OnInit } from "@angular/core";
import { User } from "src/app/shared/models/user.model";
import { UserService } from "src/app/shared/services/user.service";
import { SignInComponent } from "../sign-in/sign-in.component";

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
   user:User = new User() 
   constructor(private userService:UserService){}

   ngOnInit(): void {
       this.user.firstNameUser="shira"
       this.user.lastNameUser="ORELI"
     //  this.addUser()
       this.userService.getNumOfUser().subscribe(
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
}
import { Component, Input, OnInit } from "@angular/core";
import { User } from "src/app/shared/models/user.model";
import { UserService } from "src/app/shared/services/user.service";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
   user:User = new User() 
   constructor(private userService:UserService){}
   ngOnInit(): void {}
   signIn(){

   }
}
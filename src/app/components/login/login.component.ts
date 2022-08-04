import { Component, Input, OnInit } from "@angular/core";
import { User } from "src/app/shared/models/user.model";
import { UserService } from "src/app/shared/services/user.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user:User = new User() 
   constructor(private userService:UserService){}
   ngOnInit(): void {
    this.user.passwordUser= [passw]
    this.user.emailUser=LoginComponent.

   
}
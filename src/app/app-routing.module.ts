import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {path:'addUser',component:AddUserComponent},
  {path:'signIn',component:SignInComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

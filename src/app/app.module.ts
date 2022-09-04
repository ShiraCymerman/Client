import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { AddUserComponent } from './components/add-user/add-user.component';
import { SignInComponent } from './components/sign-in/sign-in.component';



@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

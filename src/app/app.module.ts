import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { AddUserComponent } from './components/add-user/add-user.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { TestsComponent } from './components/tests/tests.component';
import { UIUXComponent } from './components/courses/ui-ux/ui-ux.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    SignInComponent,
    HomeComponent,
    NavComponent,
    CoursesComponent,
    ContactComponent,
    TestsComponent,
    UIUXComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

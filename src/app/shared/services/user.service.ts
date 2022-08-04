import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(private http:HttpClient){ }

    addUser(user:User): Observable<boolean>//for making tha hole project wait while calling from server
    {
        return this.http.post<boolean>(environment.url+'user/AddUser',user)//הפוסט מקבל 2 דברים הכתובת URL של השרת , והאובייקט אותו אנו מעוניינים לשלוח לשרת

    }
    getNumOfUser(): Observable<number>
    {
        return this.http.get<number>(environment.url + 'user/getAllUsers')
    }
}
import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpRequest} from '@angular/common/http'; // importing the http module
import { Observable, catchError, throwError } from 'rxjs';
import { IUser } from './shared/classesAndTypes/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {
 _url='https://jsonplaceholder.typicode.com/users'
  constructor(private http:HttpClient) { }

    getAllUsers ():Observable<IUser[]>
    {
      return this.http.get<IUser[]>(this._url).pipe(catchError((err)=>{
        return throwError(()=>err.message||"internal server error")
      }))
    }

   
}

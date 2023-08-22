import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IPost } from './shared/classesAndTypes/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
_url="https://jsonplaceholder.typicode.com/posts"

  constructor(private http:HttpClient) { }
  getAllPosts():Observable<IPost[]>
  {
    return this.http.get<IPost[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message||"internal server error")
    }))
  }
}

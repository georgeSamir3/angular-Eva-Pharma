import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  baseUrl = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private http: HttpClient) {}
  getComments(postId: number): Observable<any> {
    const url = `${this.baseUrl}${postId}/comments`;
    return this.http.get<any>(url).pipe(catchError((err)=>{
      return throwError(()=>err.message||"internal server error")
    }));
  }
}

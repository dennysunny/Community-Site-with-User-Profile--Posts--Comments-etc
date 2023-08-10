import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http : HttpClient
  ) {}

  baseURL = "https://dummyapi.io/data/v1"

  getAllUsers() :Observable<any> {
    return this.http.get(this.baseURL+'/user').pipe(
      tap((user) => {
        console.log("Get Users", user);
      })
    )
  }

  getUserById(id :any) :Observable<any> {
    return this.http.get(this.baseURL+`/user/${id}`).pipe(
      tap((user) => {
        console.log("Get User", JSON.stringify(user));
      })
    )
  }

  getUserPosts(id :any) :Observable<any> {
    return this.http.get(this.baseURL + `/user/${id}/post`).pipe(
      tap((post) => {
        console.log("Get User Posts", JSON.stringify(post));
      })
    )
  }

}

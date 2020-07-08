import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostAC } from '../Models/PostAc';
import { UserService } from '../user.service';
import { UsersAC } from '../Models/UsersAc';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  rootUrl = "https://localhost:44372/";
  currentUser: UsersAC
  constructor(private userService: UserService, private http: HttpClient, private router: Router) {
   
  }

  CreatePost(post: PostAC): Observable<PostAC>{
    let url = this.rootUrl + "Posts/CreatePost";
    return this.http.post<PostAC>(url, post);
  }

  GetAllPosts(): Observable<Array<PostAC>> {
    let url = this.rootUrl + "Posts/GetAllPosts";
    return this.http.get<Array<PostAC>>(url);
  }

  GetPost(id: number): Observable<PostAC> {
    let url = this.rootUrl + "Posts/GetPost/" + id;
    return this.http.get<PostAC>(url);
  }

  EditPost(post: PostAC): Observable<PostAC> {
    let url = this.rootUrl + "Posts/EditPost";
    return this.http.put<PostAC>(url, post);

  }

  DeletePost(id: number): Observable<{}> {
    let url = this.rootUrl + "Posts/DeletePost/" + id;
    return this.http.delete(url);
  }

}

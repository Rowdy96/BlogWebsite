import { Injectable } from '@angular/core';
import { UserAC } from './Models/userAC';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsersAC } from './Models/UsersAc';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: UserAC = new UserAC();
  rootUrl = "https://localhost:44372/";

  constructor(private http: HttpClient, private router: Router) {
    this.GetLoggedInUser().subscribe(res => {
      this.currentUser = res;
    },
      err => {
        this.currentUser = null;
      });
  }

  GetLoggedInUser(): Observable<UserAC> {
    return this.http.get<UserAC>(this.rootUrl + "Users/GetLoggedInUSer");
  }

  GetAllUsers(): Observable<Array<UsersAC>> {
    return this.http.get<Array<UsersAC>>(this.rootUrl + "Users/GetUserList");
  }

  GivePermissionToUser(user: UsersAC): Observable<UsersAC> {
    let url = this.rootUrl + "Users/GivePermission";
    return this.http.put<UsersAC>(url, user);
  }

  Logout() {

    var url = this.rootUrl + "Users/Logout";
    this.http.post(url, null).subscribe(
      res => {
        this.router.navigateByUrl("/");
      },
      err => {
        console.log(err);
      });
  }
}

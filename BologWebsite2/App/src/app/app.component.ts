import { Component, OnInit } from '@angular/core';
import { UserAC } from './Models/userAC';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App';

  user: UserAC;
  isAdminUser: boolean;
  constructor(private userService: UserService) {
    this.isAdminUser = false;
  }

  ngOnInit(): void {
    this.GetLoggedInUser();
  }

  GetLoggedInUser() {
    this.userService.GetLoggedInUser().subscribe(res => {
      this.user = res;
      if (this.user.roles.includes("Admin")) {
        this.isAdminUser = true;
      }
    }, err => {
      this.user = null;
    });
  }

  Logout() {
    this.userService.Logout();
    this.GetLoggedInUser();

  }
}

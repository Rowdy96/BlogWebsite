import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UsersAC } from '../Models/UsersAc';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  userList: Array<UsersAC>;
  add: string;
  edit: string;
  delete: string;

  constructor(private userService: UserService) {
    this.userList = [];
    this.add = "Add";
    this.edit = "Edit";
    this.delete = "Delete";
  }

  ngOnInit() {
    this.GetUserList();
  }

  GetUserList(): void {
    this.userService.GetAllUsers().subscribe(
      res => {
        this.userList = res
      },
      err => {
        console.log(err);
      }
    );
  }

  GivePermission(user: UsersAC, action: string): void {

    if (action == this.add) {

      if (user.isUserAllowedToPost) {
        user.isUserAllowedToPost = false;
      }
      else {
        user.isUserAllowedToPost = true;
      }

    }
    else if (action == this.edit) {

      if (user.isUserAllowedToEdit) {
        user.isUserAllowedToEdit = false;
      }
      else {
        user.isUserAllowedToEdit = true;
      }
    }
    else if (action == this.delete) {

      if (user.isUserAllowedToDelete) {
        user.isUserAllowedToDelete = false;
      }
      else {
        user.isUserAllowedToDelete = true;
      }
    }

    this.userService.GivePermissionToUser(user).subscribe(res => {
      this.ngOnInit();
    });
    
  }

}

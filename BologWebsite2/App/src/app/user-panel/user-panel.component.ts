import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { PostAC } from '../Models/PostAc';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserPanelModule } from './user-panel.module';
import { UserAC } from '../Models/userAC';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  postList: Array<PostAC>;
  currentUser: UserAC;
 
  constructor(private postService: PostService, private userService: UserService) {
    this.postList = [];
  }

  ngOnInit() {
    this.GetAllPosts();
    this.currentUser = this.userService.currentUser;
  }

  GetAllPosts(): void {
    this.postService.GetAllPosts().subscribe(
      res => {
        this.postList = res;
      }
    );
  }

  onDelete(id: number): void {
    this.postService.DeletePost(id).subscribe(res => {
      this.ngOnInit();
    });
  }
}

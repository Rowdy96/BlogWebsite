import { Component, OnInit } from '@angular/core';
import { PostAC } from '../../Models/PostAc';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})
export class AddEditPostComponent implements OnInit {

  id: number;
  post: PostAC;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private userService: UserService
  ) {
    this.post = new PostAC();
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    if (this.id != 0) {
      this.postService.GetPost(this.id).subscribe(res => {
        this.post = res;
      });
    }

  }

  onSubmit() {

    if (this.id == 0) {

      this.post.userId = this.userService.currentUser.id

      this.postService.CreatePost(this.post).subscribe(res => {
        this.router.navigateByUrl('/UserPanel');
      });
      
    }
    else {
      this.postService.EditPost(this.post).subscribe(res => {
        this.router.navigateByUrl('/UserPanel');
      });
    }

  }

  onCancel() {
    this.router.navigateByUrl('/UserPanel');
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserPanelRoutingModule } from './user-panel-routing.module';
import { UserPanelComponent } from './user-panel.component';
import { AddEditPostComponent } from './add-edit-post/add-edit-post.component';


@NgModule({
  declarations: [UserPanelComponent, AddEditPostComponent],
  imports: [
    CommonModule,
    UserPanelRoutingModule,
    FormsModule
  ]
})
export class UserPanelModule { }

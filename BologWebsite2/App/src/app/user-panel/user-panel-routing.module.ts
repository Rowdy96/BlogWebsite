import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPanelComponent } from './user-panel.component';
import { AddEditPostComponent } from './add-edit-post/add-edit-post.component';

const routes: Routes = [
  {
  path: '', component: UserPanelComponent
  },
  {
    path: 'add-post/:id', component: AddEditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPanelRoutingModule { }

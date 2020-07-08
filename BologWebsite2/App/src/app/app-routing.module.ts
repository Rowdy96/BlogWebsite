import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'AdminPanel', loadChildren: () => import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule) },
  { path: 'UserPanel', loadChildren: () => import('./user-panel/user-panel.module').then(m => m.UserPanelModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

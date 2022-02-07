import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { EditUserProfileComponent } from '../user/edit-user-profile/edit-user-profile.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/user/user-profile', pathMatch: 'full' },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-user-profile',
    component: EditUserProfileComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [UserProfileComponent, EditUserProfileComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModule {}

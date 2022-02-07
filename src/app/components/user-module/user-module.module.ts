import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { EditUserProfileComponent } from '../user/edit-user-profile/edit-user-profile.component';

@NgModule({
  declarations: [UserProfileComponent, EditUserProfileComponent],
  imports: [CommonModule],
})
export class UserModuleModule {}

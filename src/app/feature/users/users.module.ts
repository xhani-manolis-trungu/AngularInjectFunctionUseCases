import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersContainerComponent } from './users-container/users-container.component';
import { UserComponent } from './user/user.component';
import { MatButtonModule } from '@angular/material/button';
import { UserListComponent } from './user-list/user-list.component';
import { CoreModule } from '../../core/core.module';
import { X_CALLER_CHAIN_TOKEN } from '../../core/caller-chain-interceptor.service';

@NgModule({
  declarations: [UsersContainerComponent, UserComponent, UserListComponent],
  imports: [CommonModule, UsersRoutingModule, MatButtonModule, CoreModule],
  exports: [UserListComponent],
  providers: [{ provide: X_CALLER_CHAIN_TOKEN, useValue: 'CCCC', multi: true }],
})
export class UsersModule {}

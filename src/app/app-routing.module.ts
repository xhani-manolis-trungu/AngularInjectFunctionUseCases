import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './feature/home/home-container/home-container.component';
import { ExperimentalUserLoaderService } from './feature/users/experimental-user-loader.service';
import { UserLoaderService } from './feature/users/user-loader.service';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./feature/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./feature/admin/admin.component').then((c) => c.AdminComponent),
    providers: [
      {
        provide: UserLoaderService,
        useExisting: ExperimentalUserLoaderService,
      },
    ],
  },
  /**
   * Use cases to utilize Providers in Angular Route.
   *
   * 1. When there is a new API coming out, and we just want to try it in a small portion of the application.
   *
   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

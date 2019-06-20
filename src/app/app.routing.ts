import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SetListComponent } from './Set-list/Set-list.component';
import { SetDetailComponent } from './set-detail/set-detail.component';
import { AdminComponent } from './admin/admin.component';
import { BrowseComponent } from './browse/browse.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'set-list',
    component: SetListComponent
  },
  {
    path: 'sets/:id',
    component: SetDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'browse',
    component: BrowseComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

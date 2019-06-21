import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SetListComponent } from './Set-list/Set-list.component';
import { SetDetailComponent } from './set-detail/set-detail.component';
import { AdminComponent } from './admin/admin.component';
import { BrowseComponent } from './browse/browse.component';
import { ThemesYearsListComponent } from './themes-years-list/themes-years-list.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { MySetsComponent } from './my-sets/my-sets.component'
import { WantedSetsComponent } from './wanted-sets/wanted-sets.component'

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'browse/set-list',
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
  },
  {
    path: 'browse/themes-years-list',
    component: ThemesYearsListComponent
  },
  {
    path: 'my-collection',
    component: MyCollectionComponent
  },
  {
    path: 'my-collection/my-sets',
    component: MySetsComponent
  },
  {
    path: 'my-collection/my-wanted',
    component: WantedSetsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/personal/home/home.component';
import { BusinessHomeComponent } from './pages/business/home/home.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/personal',
    pathMatch: 'full',
  },
  {
    path: 'personal',
    component: HomeComponent,
  },
  {
    path: 'business',
    component: BusinessHomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

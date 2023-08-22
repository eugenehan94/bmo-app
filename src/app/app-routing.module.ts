import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/personal/home/home.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

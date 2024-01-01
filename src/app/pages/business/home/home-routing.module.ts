import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessHomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: BusinessHomeComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineBankingComponent } from './online-banking.component';
const routes: Routes = [{ path: '', component: OnlineBankingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineBankingRoutingModule {}

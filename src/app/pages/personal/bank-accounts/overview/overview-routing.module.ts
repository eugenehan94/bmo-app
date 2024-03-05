import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PersonalBankAccountsMainComponent } from './main.component';
import { PersonalBankAccountsOverviewPage } from '../overview/overview.component';
import { GettingStartedComponent } from '../getting-started/getting-started.component';
const routes: Routes = [
  //   {
  //     path: '',
  //     component: PersonalBankAccountsMainComponent,
  //     children: [
  //       {
  //         path: '',
  //         component: PersonalBankAccountsOverviewPage,
  //       },
  //     ],
  //   },
  {
    path: 'getting-started',
    component: GettingStartedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewRoutingModule {}

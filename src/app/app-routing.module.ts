import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotAuthenticatedGuard} from "./shared/guards/not-authenticated.guard";
import {AuthenticatedGuard} from "./shared/guards/authenticated.guard";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'account'
  },
  {
    path: 'account',
    canActivate: [NotAuthenticatedGuard],
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'credits',
    canActivate: [AuthenticatedGuard],
    loadChildren: () => import('./credits/credits.module').then(m => m.CreditsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

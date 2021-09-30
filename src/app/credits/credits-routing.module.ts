import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreditsComponent} from "./containers/credits/credits.component";
import {UserResolver} from "./resolvers/user.resolver";
import {AuthenticatedGuard} from "../shared/guards/authenticated.guard";

const routes: Routes = [
  {
    path: '',
    resolve: {
      user: UserResolver
    },
    canActivate: [AuthenticatedGuard],
    component: CreditsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditsRoutingModule {
}

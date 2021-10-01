import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreditsComponent} from "./containers/credits/credits.component";
import {UserResolver} from "./resolvers/user.resolver";

const routes: Routes = [
  {
    path: '',
    resolve: {
      user: UserResolver
    },
    component: CreditsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditsRoutingModule {
}

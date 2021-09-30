import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountRoutingModule} from "./account-routing.module";
import {LoginComponent} from './containers/login/login.component';
import {RegisterComponent} from './containers/register/register.component';
import {HttpClientModule} from "@angular/common/http";
import {AccountState} from "./state/account.state";
import {NgxsModule} from "@ngxs/store";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([AccountState]),
    AccountRoutingModule
  ]
})
export class AccountModule {
}

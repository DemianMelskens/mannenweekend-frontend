import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxsModule} from "@ngxs/store";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./shared/interceptors/token.interceptor";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {environment} from "../environments/environment";
import {AccountState} from "./account/state/account.state";
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {icons} from "../assets/icons";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxsModule.forRoot([AccountState], {developmentMode: !environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    iconLibrary: FaIconLibrary,
  ) {
    iconLibrary.addIcons(...icons);
  }
}

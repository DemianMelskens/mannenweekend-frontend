import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AccountClient} from "../clients/account.client";
import {map, tap} from "rxjs/operators";
import {Store} from "@ngxs/store";
import {User} from "../models/user.model";
import {UpdateUser} from "../state/account.actions";
import {TokenService} from "../../shared/services/token.service";

@Injectable({providedIn: 'root'})
export class AccountService {

  constructor(
    private accountClient: AccountClient,
    private tokenService: TokenService,
    private store: Store,
  ) {
  }

  public register(registration: { username: string, password: string, firstname: string, lastname: string }): Observable<string> {
    return this.accountClient.register(registration);
  }

  public authenticate(login: { username: string, password: string }): Observable<string> {
    return this.accountClient.authenticate({...login, rememberMe: false})
      .pipe(
        map(result => result.token),
        tap(token => this.tokenService.setToken(token))
      );
  }

  public logout(): void {
    this.tokenService.removeToken();
  }

  public getUser(): Observable<User> {
    return this.accountClient.getUser().pipe(
      tap(user => this.store.dispatch(new UpdateUser(user)))
    );
  }
}

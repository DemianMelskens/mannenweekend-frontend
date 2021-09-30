import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

import {AccountService} from "../../account/services/account.service";
import {UpdateUser} from "../../account/state/account.actions";
import {User} from "../../account/models/user.model";
import {tap} from "rxjs/operators";
import {Store} from "@ngxs/store";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<Observable<User>> {

  constructor(
    private store: Store,
    private accountService: AccountService
  ) {
  }

  resolve(): Observable<User> {
    return this.accountService.getUser();
  }
}

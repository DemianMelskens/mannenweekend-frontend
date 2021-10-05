import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

import {AccountService} from "../../account/services/account.service";
import {User} from "../../account/models/user.model";
import {catchError} from "rxjs/operators";
import {Store} from "@ngxs/store";
import {Observable, of, throwError} from 'rxjs';
import {HttpErrorResponse} from "@angular/common/http";

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
    return this.accountService.getUser().pipe(
      catchError(err => this.handleAuthenticationError(err))
    );
  }

  private handleAuthenticationError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 403 || err.status === 401) {
      this.accountService.logout();
      return of(err.message);
    }
    return throwError(err);
  }
}

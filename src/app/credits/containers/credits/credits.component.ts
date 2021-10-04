import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {User} from "../../../account/models/user.model";
import {Observable} from "rxjs";
import {AccountState} from "../../../account/state/account.state";
import {TokenService} from "../../../shared/services/token.service";
import {Router} from "@angular/router";
import {AccountService} from "../../../account/services/account.service";

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  user?: Observable<User | undefined>;

  constructor(
    private store: Store,
    private router: Router,
    private accountService: AccountService
  ) {
  }

  ngOnInit(): void {
    this.user = this.store.select(AccountState.getUser);
  }

  logout(): void {
    this.accountService.logout();
    this.router.navigate(['/account', 'login']);
  }
}

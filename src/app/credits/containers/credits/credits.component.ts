import {Component} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {User} from "../../../account/models/user.model";
import {Observable} from "rxjs";
import {AccountService} from "../../../account/services/account.service";

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent {

  @Select()
  user?: Observable<User | undefined>;

  constructor(
    private store: Store,
    private accountService: AccountService
  ) {
  }

  logout(): void {
    this.accountService.logout();
  }
}

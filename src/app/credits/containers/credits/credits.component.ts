import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {User} from "../../../account/models/user.model";
import {Observable} from "rxjs";
import {AccountState} from "../../../account/state/account.state";

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  user?: Observable<User | undefined>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.user = this.store.select(AccountState.getUser);
  }
}

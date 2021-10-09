import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {User} from "../../../account/models/user.model";
import {Observable} from "rxjs";
import {AccountService} from "../../../account/services/account.service";
import {AccountState} from "../../../account/state/account.state";
import {EventService} from "../../../shared/services/event.service";

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  @Select(AccountState.getUser)
  user?: Observable<User | undefined>;

  constructor(
    private store: Store,
    private eventService: EventService,
    private accountService: AccountService
  ) {
  }

  ngOnInit(): void {
    this.eventService.getEvent().subscribe(event => console.log("[component]: ", event))
  }

  logout(): void {
    this.accountService.logout();
  }
}

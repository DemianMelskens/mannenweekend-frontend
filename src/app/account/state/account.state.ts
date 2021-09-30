import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {User} from "../models/user.model";
import {UpdateUser} from "./account.actions";
import {patch} from "@ngxs/store/operators";

export interface AccountState {
  user: User;
}

@State<Partial<AccountState>>({
  name: 'account',
  defaults: {},
})

@Injectable({providedIn: 'root'})
export class AccountState {

  @Selector()
  static getUser(state: Partial<AccountState>): User | undefined {
    return state.user;
  }

  @Action(UpdateUser)
  updateUser(ctx: StateContext<Partial<AccountState>>, {user}: UpdateUser): void {
    ctx.setState(
      patch({
        user
      })
    );
  }
}

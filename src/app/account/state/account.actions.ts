import {User} from "../models/user.model";

export class UpdateUser {
  static readonly type = '[Account] Update user';

  constructor(public user?: User) {
  }
}

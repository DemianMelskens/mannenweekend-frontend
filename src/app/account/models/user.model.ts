import {Role} from "./role.model";

export interface User {
  username: string;
  firstName: string;
  lastName: string;
  credits: number;
  role: Role;
}

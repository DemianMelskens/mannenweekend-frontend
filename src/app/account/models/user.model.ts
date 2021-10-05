import {Role} from "./role.model";

export interface User {
  username: string;
  firstname: string;
  lastname: string;
  credits: number;
  role: Role;
}

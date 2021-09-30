import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {RegisterDto} from "./dtos/register.dto";
import {LoginDto} from "./dtos/login.dto";
import {TokenDto} from "./dtos/token.dto";
import {take} from "rxjs/operators";
import {User} from "../models/user.model";

@Injectable({providedIn: 'root'})
export class AccountClient {

  constructor(
    private http: HttpClient
  ) {
  }

  public register(registerDto: RegisterDto): Observable<string> {
    return this.http.post<string>(`${environment.apiUrl}/register`, registerDto).pipe(take(1));
  }

  public authenticate(loginDto: LoginDto): Observable<TokenDto> {
    return this.http.post<TokenDto>(`${environment.apiUrl}/authenticate`, loginDto).pipe(take(1));
  }

  public getUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/current`).pipe(take(1));
  }
}

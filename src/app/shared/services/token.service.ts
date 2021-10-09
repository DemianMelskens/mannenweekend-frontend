import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly TOKEN_KEY = 'token';

  public getTokenSnapshot(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public getToken(): Observable<string | null> {
    return of(localStorage.getItem(this.TOKEN_KEY));
  }

  public setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token)
  }

  public removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}

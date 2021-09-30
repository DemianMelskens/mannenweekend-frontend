import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public getToken(): Observable<string | null> {
    return of(localStorage.getItem('token'));
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token)
  }

  public removeToken(): void {
    localStorage.removeItem('token');
  }
}

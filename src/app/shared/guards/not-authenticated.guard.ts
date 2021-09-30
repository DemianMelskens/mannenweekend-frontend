import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {map, switchMap, tap} from "rxjs/operators";
import {TokenService} from "../services/token.service";

@Injectable({providedIn: 'root'})
export class NotAuthenticatedGuard implements CanActivate {

  constructor(
    private router: Router,
    private tokenService: TokenService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.tokenService.getToken().pipe(
      map(token => token === null),
      switchMap(canActive => {
        if (canActive) {
          return of(canActive);
        }

        return this.router.navigate(["/credits"]);
      })
    );
  }

}

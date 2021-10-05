import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  failed: boolean = false;
  loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {
  }

  submit(): void {
    if (this.loginForm.valid) {
      this.accountService.authenticate(this.loginForm.value).pipe(
        catchError(err => {
          this.failed = true;
          return throwError(err);
        })
      )
        .toPromise()
        .then(() => {
          this.failed = false;
          this.router.navigate(['credits']);
        });
    }
  }
}

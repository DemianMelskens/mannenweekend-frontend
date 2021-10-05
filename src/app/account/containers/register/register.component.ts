import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  failed: boolean = false;
  registerForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]]
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.registerForm.valid) {
      this.accountService.register(this.registerForm.value).pipe(
        catchError(err => {
          this.failed = true;
          return throwError(err);
        })
      )
        .toPromise()
        .then(() => this.router.navigate(['/account', 'login']));
    }
  }
}

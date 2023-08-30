import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { catchError, reduce, tap } from "rxjs/operators";
import { AuthResponseData } from "./authResponseData.model";
import { User } from "./user.model";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7lN7hshlgoCNQTGfMFi9hcmpiVyb-MyI',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
    .pipe(
      catchError(this.handleError), 
      tap(resData => {
        this.handleAuthenication(
          resData.email, 
          resData.localId,
          resData.idToken, 
          +resData.expiresIn
        );
      })
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7lN7hshlgoCNQTGfMFi9hcmpiVyb-MyI',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
    .pipe(
      catchError(this.handleError),
      tap(resData => {
        this.handleAuthenication(
          resData.email, 
          resData.localId,
          resData.idToken, 
          +resData.expiresIn
        );
      }
    ));
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
  }

  private handleAuthenication(
    email: string, 
    userId: string, 
    token: string, 
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
      const user = new User(email, userId, token, expirationDate);
      this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
      //... you can add more login error cases
    }
    return throwError(errorMessage);
  }
}
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";


export interface AuthResponseData{
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService{
    constructor(private http: HttpClient) {}
    signup(email: string, password: string, ){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCG2OGCCsa-UBvSW2RVJp9MVeGCGH-uYOo', 
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError));
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCG2OGCCsa-UBvSW2RVJp9MVeGCGH-uYOo',
            {
                    email: email,
                    password: password,
                    returnSecureToken: true 
            }
        ).pipe(catchError(this.handleError));
    }
   
    private handleError (errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occured!';
                if (!errorRes.error || !errorRes.error.error) {
                    return throwError(errorMessage);
                }
                console.log(errorRes.error.error.message)
                switch (errorRes.error.error.message) {
                    
                    case 'EMAIL_EXISTS':
                        errorMessage = 'This email exists already.';
                        break;
                    case 'INVALID_LOGIN_CREDENTIALS':
                        errorMessage = 'Login or password is wrong';
                        break;
                    
                }
                return throwError(errorMessage);
        }
    }

import { DomainName } from './../Utility/PathTool';
import { LoginUserDTO } from './../DTOs/LoginUserDTO';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUserDTO } from 'src/app/DTOs/RegisterUserDTO';
import { Observable, BehaviorSubject } from 'rxjs';
import { ILoginUserAccount } from '../DTOs/ILoginUserAccount';
import { CurrentUser } from '../DTOs/currentUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUser: BehaviorSubject<CurrentUser> = new BehaviorSubject<
    CurrentUser
  >(null);
  constructor(private http: HttpClient) {}

  setCurrentUser(user: CurrentUser): void {
    this.currentUser.next(user);
  }
  getCurrentUser(): Observable<CurrentUser> {
    return this.currentUser;
  }

  registreUser(registerData: RegisterUserDTO): Observable<any> {
    return this.http.post<any>(DomainName + '/account/register', registerData);
  }

  loginUser(loginUserDTO: LoginUserDTO): Observable<ILoginUserAccount> {
    return this.http.post<ILoginUserAccount>(
      DomainName + '/Account/login',
      loginUserDTO
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUserDTO } from 'src/app/DTOs/RegisterUserDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountserviceService {
  constructor(private http: HttpClient) {}

  registreUser(registerData: RegisterUserDTO): Observable<any> {
    return this.http.post<any>(
      'https://localhost:44381/Account/register',
      registerData
    );
  }
}

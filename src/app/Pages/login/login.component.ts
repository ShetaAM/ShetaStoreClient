import { CurrentUser } from './../../DTOs/currentUser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { LoginUserDTO } from 'src/app/DTOs/LoginUserDTO';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginform: FormGroup;
  @ViewChild('sweetAlert') private sweetAlert: SwalComponent;
  constructor(
    private authservice: AuthService,
    private cookieservice: CookieService
  ) {}

  ngOnInit(): void {
    this.loginform = new FormGroup({
      Email: new FormControl(null, [
        Validators.email,
        Validators.required,
        Validators.maxLength(100),
      ]),
      Password: new FormControl(null, [
        Validators.required,
        Validators.maxLength(16),
      ]),
    });
  }

  submitLoginForm() {
    if (this.loginform.valid) {
      const loginData = new LoginUserDTO(
        this.loginform.controls.Email.value,
        this.loginform.controls.Password.value
      );
      this.authservice.loginUser(loginData).subscribe((res) => {
        const currentUser = new CurrentUser(
          res.data.UserId,
          res.data.FirstName,
          res.data.LastName
        );
        console.log(res);
        console.log(currentUser);

        if (res.status === 'Success') {
          this.cookieservice.set(
            'shetacookie',
            res.data.token,
            res.data.expireTime * 60
          );
          this.authservice.setCurrentUser(currentUser);
          this.loginform.reset();
        } else if (res.status === 'Error') {
          this.sweetAlert.text = res.data.message;
          this.sweetAlert.fire();
        } else if (res.status === 'NotFound') {
          this.sweetAlert.text = res.data.message;
          this.sweetAlert.fire();
        }
      });
    }
  }
}

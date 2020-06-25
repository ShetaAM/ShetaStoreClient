import { AuthService } from './../../service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterUserDTO } from 'src/app/DTOs/RegisterUserDTO';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public registerForm: FormGroup;
  private router: Router;
  @ViewChild('sweetAlert') private sweetAlert: SwalComponent;
  @ViewChild('sweetAlert') private sweetAlertSuccess: SwalComponent;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      UserName: new FormControl(null, [Validators.required]),
      Email: new FormControl(null, [Validators.email, Validators.required]),
      Password: new FormControl(null, [Validators.required]),
      RePassword: new FormControl(null, [Validators.required]),
      FirstName: new FormControl(null, [Validators.required]),
      LastName: new FormControl(null, [Validators.required]),
    });
  }

  submitRegisterForm() {
    const registerData = new RegisterUserDTO(
      this.registerForm.controls.UserName.value,
      this.registerForm.controls.Email.value,
      this.registerForm.controls.Password.value,
      this.registerForm.controls.RePassword.value,
      this.registerForm.controls.FirstName.value,
      this.registerForm.controls.LastName.value
    );
    this.authService.registreUser(registerData).subscribe((res) => {
      console.log(res);
      if (res.status === 'Success') {
        this.sweetAlertSuccess.fire();
      }
      if (res.status === 'Error') {
        this.registerForm.reset();
        this.sweetAlert.fire();
      }
    });
  }
}

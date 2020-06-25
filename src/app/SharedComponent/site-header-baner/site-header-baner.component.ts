import { CurrentUser } from './../../DTOs/currentUser';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-site-header-baner',
  templateUrl: './site-header-baner.component.html',
  styleUrls: ['./site-header-baner.component.scss'],
})
export class SiteHeaderBanerComponent implements OnInit {
  user: CurrentUser = null;
  constructor(private authservice: AuthService) {}

  ngOnInit(): void {
    this.authservice.getCurrentUser().subscribe((user) => {
      this.user = user;
    });
  }
}

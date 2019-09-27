import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { longStackSupport } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {this.authService.logout()
  }

}

import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public loginService: LoginService) {

  }

  ionViewDidEnter() {
  }

  loginUsingFacebook() {
    this.loginService.loginWithFacebook().then(data => {
      debugger;
    })
      .catch(error => {
        debugger;
      })
  }

}

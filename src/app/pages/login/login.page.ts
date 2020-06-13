import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;


  constructor(public loginService: LoginService) {

  }




  ngOnInit() {

  }

  ionViewDidEnter() {
    this.getData();
  }

  getData() {

    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

  }

  loginUsingFacebook() {
    this.loginService.loginWithFacebook().then(data => {
      debugger;
    })
      .catch(error => {
        debugger;
      })
  }

  login() {

  }

}

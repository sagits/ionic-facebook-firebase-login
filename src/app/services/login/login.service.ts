import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: Observable<firebase.User>;
  userLocal;

  constructor(
    public angularFireAuth: AngularFireAuth,
    private facebook: Facebook,) {
    this.user = this.getCurrentUser();
  }

  getCurrentUser(): Observable<firebase.User> {
    return this.angularFireAuth.authState.pipe(
      map(user => {
        this.userLocal = user;
        return user;
      }));
  }


  loginWithFacebook() {
    return this.loginAndgetFacebookToken().then((facebookToken) => {
      
      const facebookCredential = auth.FacebookAuthProvider.credential(facebookToken);
      debugger;
      return this.angularFireAuth.signInWithCredential(facebookCredential);
    })
   
  }

  private loginAndgetFacebookToken() {

    return this.facebook.login(['email']).then((data) => {
      console.log('facebook data', data);
      const facebookToken = data.authResponse.accessToken;
      return facebookToken;
    })
  }
}

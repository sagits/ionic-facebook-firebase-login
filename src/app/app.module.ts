import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { Facebook } from '@ionic-native/facebook/ngx';

const firebaseConfig = {
  apiKey: "AIzaSyA4ctNk6NJWIEm2soXCpabYma3L80LveiI",
  authDomain: "test-ionic-b29aa.firebaseapp.com",
  databaseURL: "https://test-ionic-b29aa.firebaseio.com",
  projectId: "test-ionic-b29aa",
  storageBucket: "test-ionic-b29aa.appspot.com",
  messagingSenderId: "510923265412",
  appId: "1:510923265412:web:af9d89700d3d8493a779d1"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    Facebook,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

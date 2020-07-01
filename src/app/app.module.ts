import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule }   from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import * as firebase from 'firebase';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCM_WjnQy7NP-U7FGKHVHQZq38RoutesmZOk3fZc",
      authDomain: "bakkiehi-94ab5.firebaseapp.com",
      databaseURL: "https://bakkiehi-94ab5.firebaseio.com",
      projectId: "bakkiehi-94ab5",
      storageBucket: "bakkiehi-94ab5.appspot.com",
      messagingSenderId: "33579246710",
      appId: "1:33579246710:web:b9a21b20297f6d1043ab57"
};

@NgModule({
  declarations: [
    AppComponent,
    PhoneLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

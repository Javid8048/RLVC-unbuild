import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AngularFireModule} from '@angular/fire/compat';
import { MeetingRoomComponent } from './meeting-room/meeting-room.component'

export const firebaseConfig =  {
  apiKey: "AIzaSyD3GChDwzmoOXuEhytA1slQm-12ZGarsGM",
  authDomain: "fir-rlvc.firebaseapp.com",
  projectId: "fir-rlvc",
  storageBucket: "fir-rlvc.appspot.com",
  messagingSenderId: "1061693431183",
  appId: "1:1061693431183:web:21dd3323eb7530e406bffa",
  measurementId: "G-XFCP0V38D8"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MeetingRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

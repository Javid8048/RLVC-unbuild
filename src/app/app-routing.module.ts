import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MeetingRoomComponent } from './meeting-room/meeting-room.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: "full"},
  {path: 'meetingRoom', component: MeetingRoomComponent, canActivate: [AuthGuardService]},
  { path: '**', redirectTo: '' },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

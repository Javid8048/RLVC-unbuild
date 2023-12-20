import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MakeCallComponent } from './make-call/make-call.component';
import { JoinCallComponent } from './join-call/join-call.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: 'makeCall',
    component: MakeCallComponent
  },
  {
    path: 'joinCall',
    component: JoinCallComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

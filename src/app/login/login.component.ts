import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild("joinCallName") joinCallName!: ElementRef;
  @ViewChild("joinCallId") joinCallId!: ElementRef;
  @ViewChild("makeCallName") makeCallName!: ElementRef;

  constructor( private router: Router) {}

  callJson = {makeCall: false, joinCall: false, loginPage: true}

  joinCall(e: Event) {
    e.preventDefault();
    if(!this.joinCallName.nativeElement.value.trim()) alert("Required name")
    else if(!this.joinCallId.nativeElement.value.trim()) alert("Required Call id")
    else {
      sessionStorage.setItem("userName", this.joinCallName.nativeElement.value)
      sessionStorage.setItem("callId", this.joinCallId.nativeElement.value)
      this.router.navigateByUrl("meetingRoom");
      
    }
  }

  makeCall(e: Event) {
    e.preventDefault()
    if(!this.makeCallName.nativeElement.value.trim()) alert("Required name")
    else {
      sessionStorage.setItem("userName", this.makeCallName.nativeElement.value)
      this.router.navigate(["meetingRoom"])
    }
  }
}

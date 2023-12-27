import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meeting-room',
  templateUrl: './meeting-room.component.html',
  styleUrls: ['./meeting-room.component.scss']
})
export class MeetingRoomComponent {

  constructor( private router: Router, private route: ActivatedRoute) {}

  endCall() {
    console.log(this.route);
    this.router.navigateByUrl("")
  }
}

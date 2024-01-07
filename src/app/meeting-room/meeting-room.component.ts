import { Component, ElementRef, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meeting-room',
  templateUrl: './meeting-room.component.html',
  styleUrls: ['./meeting-room.component.scss']
})


export class MeetingRoomComponent {

  @ViewChild("webCamVideo") webCamVideo !: ElementRef;
  @ViewChild("remoteVideo") remoteVideo !: ElementRef;
  mediaDevice = navigator.mediaDevices;
  mediaStream: any;
  userName: string = sessionStorage["userName"];

  constructor(private router: Router, private route: ActivatedRoute, private firestore: AngularFirestore ) {
    this.startCameraAndAudio()
  }

  endCall() {
    console.log(this.route);
    console.log(this.router);
    sessionStorage.clear();
    this.router.navigateByUrl("")
    this.stopCameraAndAudio()
  }

  async startCall() {
  };

  async joinCall() {
  }

  startCameraAndAudio() {
    this.mediaDevice.getUserMedia({
      video: true,
      audio: true,
    })
      .then((stream) => { // Store the stream in the property
        console.log(stream);
        this.mediaStream = stream;

        this.webCamVideo.nativeElement.srcObject = stream;
        this.webCamVideo.nativeElement.addEventListener("loadedmetadata", () => {
          this.webCamVideo.nativeElement.play();
        });
      })
      .catch((err) => alert(err));
  }
  stopCameraAndAudio() { // Check if the mediaStream is defined
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track: any) => { // Stop tracks in the stream
        track.stop();
      });
      this.webCamVideo.nativeElement.removeEventListener("loadedmetadata", () => { // Remove the event listener
        this.webCamVideo.nativeElement.play();
      });
      this.webCamVideo.nativeElement.srcObject = null; // Set srcObject to null to release resources
      this.mediaStream = null;  // Set mediaStream to null
    }
  }


}

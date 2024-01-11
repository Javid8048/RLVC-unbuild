import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meeting-room',
  templateUrl: './meeting-room.component.html',
  styleUrls: ['./meeting-room.component.scss']
})

export class MeetingRoomComponent implements OnDestroy {
  @ViewChild("webCamVideo") webCamVideo !: ElementRef;
  @ViewChild("remoteVideo") remoteVideo !: ElementRef;
  callsCollection:any;
  mediaDevice = navigator.mediaDevices;
  mediaStream: any;
  userName: string = sessionStorage["userName"];

  isCameraOn = true;
  isMikeOn = true

  constructor(private router: Router, private route: ActivatedRoute, private firestore: AngularFirestore ) {
    this.startCameraAndAudio()
  }

  endCall() {
    sessionStorage.clear();
    this.router.navigateByUrl("")
    this.stopCameraAndAudio()
  }


  camera() {
    if(!this.isMikeOn) return this.stopCameraAndAudio()
    this.isCameraOn = !this.isCameraOn
  };
  mike() {
    if(!this.isCameraOn) return this.stopCameraAndAudio()
    this.isMikeOn = !this.isMikeOn
  }
  joinCode() {
    
  }

  startCameraAndAudio() {
    this.mediaDevice.getUserMedia({
      video: this.isCameraOn ,
      audio: this.isMikeOn,
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
      this.callsCollection = this.firestore.collection("calls");

      let callerId = '1234567890';
      let calleeId = '0987654321';
      this.callsCollection.add({
        callerId: callerId, 
        calleeId: calleeId, 
      })
      .then((docRef: any) => {
        console.log( docRef)
        console.log("Caller ID stored in Firestore with document ID: ", docRef.id)
      })
      .catch(function(error: any) {
        console.error("Error adding document: ", error);
       });
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

  ngOnDestroy() {
    this.endCall()
  }



}
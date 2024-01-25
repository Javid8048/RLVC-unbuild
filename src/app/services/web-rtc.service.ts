import { EventEmitter, Injectable } from '@angular/core';
import * as SimplePeer from 'simple-peer';

@Injectable({
  providedIn: 'root'
})
export class WebRTCService {
  private peer: SimplePeer.Instance;
  public signalEvent: EventEmitter<any> = new EventEmitter();
  public streamEvent: EventEmitter<MediaStream> = new EventEmitter();

  constructor() {
    this.peer = new SimplePeer({ initiator: true, trickle: false });

    this.peer.on('signal', (data: any) => {
      // Send the data to the other peer
      // For example, using a signaling server or another method
      this.signalEvent.emit(data);
    });

    this.peer.on('stream', (stream: any) => {
      // Handle the incoming stream (e.g., display it in a video element)
      this.streamEvent.emit(stream);
    });
  }

  // Add methods for handling connection, data, and other events

}

import { Injectable } from '@angular/core';
declare const hj: any; // Declare Hotjar object

@Injectable({
  providedIn: 'root'
})
export class HotjarService {
  identify(userId: string): void {
    hj('identify', userId);
  }

  tagRecording(tag: string): void {
    hj('tagRecording', [tag]);
  }
  constructor() { }
}

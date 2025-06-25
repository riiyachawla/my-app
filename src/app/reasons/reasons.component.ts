import { Component } from '@angular/core';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.css']
})
export class ReasonsComponent {
  showReasons= false;
  showFinalMessage= false;
  currentIndex=0;

  reasons: string[]=[
    "You've become my comfort space - the one I run to first.",
    "You are real and honest, even when it's hard.",
    "You have become home to me.",
    "You hype me up when I need it, and ground me when I need that too.",
    "You make FOREVER feel like a beautiful possibility.",
    "You are cute even when you are angry (Jk😹)"
    ];

  startReasons(){
    this.showReasons=true;
    }

  nextReason(){
    if(this.currentIndex<this.reasons.length-1){
      this.currentIndex++;
      }else{
        this.showReasons=false;
        this.showFinalMessage=true;
        // this.launchConfetti();
        }
      }

    // launchConfetti(){
    //   const confetti=(window as any).confetti;
    //   if(confetti){
    //     confetti({
    //       particleCount: 150,
    //       spread: 70,
    //       origin: {y: 0.6}
    //       });
    //     }
    //   }
}
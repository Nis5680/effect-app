import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userName = signal('Nishit');
  count= signal(0);
  displayheading=false;
  constructor() {
    effect(() => {
      if(this.count()==2){
        this.displayheading=true
        setTimeout(() => {
          this.displayheading=false
        }, 2000)
      }else{
        this.displayheading=false;
      }
    });
  }
  toggleValue(){
    this.count.set(this.count()+1);
    this.displayheading=!this.displayheading;
  }
}

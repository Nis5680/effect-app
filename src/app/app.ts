import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userName = signal('Nishit');

  constructor() {
    effect(() => {
      console.log(this.userName());
    });
  }

}

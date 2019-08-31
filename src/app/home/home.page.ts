import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  private instruments = [
    {
      name: 'Flauta',
      img: 'assets/img/flauta.png',
      sound: 'assets/sounds/flauta.mp3'
    },
    {
      name: 'Bombo A',
      img: 'assets/img/bombo1.png',
      sound: 'assets/sounds/bombo1.mp3'
    },
    {
      name: 'Bombo B',
      img: 'assets/img/bombo2.png',
      sound: 'assets/sounds/bombo2.mp3'
    },
    {
      name: 'Platillos',
      img: 'assets/img/platillos.png',
      sound: 'assets/sounds/platillos.mp3'
    }
  ];

  playMusic(instrumentSound: any) {
    let sound = new Audio();
    sound.src = instrumentSound;
    sound.load();
    sound.play();
  }

}

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appComponentes = [
    { title: 'home', url: 'home', icon: 'headset' },
    { title: 'ion-button', url: 'button', icon: 'globe' },
    { title: 'Alert', url: 'alert', icon: 'information' },
    { title: 'Cards', url: 'cards', icon: 'dice' },
    { title: 'Acordeon', url: 'acordeon', icon: 'finger-print' },
    { title: 'Testando123', url: 'testes', icon: 'server' },
    { title: 'Action-sheet', url: 'action-sheet', icon: 'battery-full' },
    { title: 'tags', url: 'tags', icon: 'aperture' },
    { title: 'js', url: 'js', icon: 'bug' },
    { title: 'datetime', url: 'datetime', icon: 'desktop' },

     ];




     public appNative = [
      { title: 'camera', url: 'camera', icon: 'camera ' },
 
  
       ];
  constructor() {}
}

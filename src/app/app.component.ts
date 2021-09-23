import { Component } from '@angular/core';
import { Opmenu } from './interfaces/opmenu';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones:Opmenu[]=[
    {
      link:"home",
      texto:"home",
      icono:"home"
    },
    {
      link:"pag2",
      texto:"Login",
      icono:"power"
    },

  ]
  constructor() {}
}

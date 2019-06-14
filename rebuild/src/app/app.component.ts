import { Component } from '@angular/core';
import { Set } from './models/set.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Brickset Homepage'
  sets: Set[] = [
  ];
}

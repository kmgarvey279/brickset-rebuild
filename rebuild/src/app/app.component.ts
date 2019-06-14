import { Component } from '@angular/core';
import { Set } from './models/set.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Brickset Homepage';
  selectedSet = null;

  masterSetList: Set[] = [
    new Set("Test Pirate Ship", 2711, "Normal", "Action/Adventure", "Pirates", "Zombie Pirates", 2019, "Zombie Pirate Ship Adventure", 502, 60.00, "7-12", "Box", "Retail"),
    new Set("Test Spaceship", 3322, "Normal", "Action/Adventure", "Space", "Space Truckers", 2018, "Space Trucker Ship Adventure", 438, 45.00, "7-12", "Box", "Retail"),
    new Set("Test Cafe", 213, "Special", "Present Day", "Creator Expert", "Modular Buildings", 2017, "City Cafe Modular Expert", 2302, 160.00, "12+", "Box", "Exclusive")
  ];
  addSet(newSet: Set) {
    this.masterSetList.push(newSet);
  }

  editSet(clickedSet) {
    this.selectedSet = clickedSet;
  }

  finishedEditing() {
    this.selectedSet = null;
  }
}

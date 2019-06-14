import { Component, Output, EventEmitter } from '@angular/core';
import { Set } from '../models/set.model';

@Component({
  selector: 'app-new-Set',
  templateUrl: './new-Set.component.html',
  styleUrls: ['./new-Set.component.css']
})
export class NewSetComponent {
  @Output() sendSet = new EventEmitter();

  submitForm(name: string, number: string, ageRange: string, pieces: string, packaging: string, year: string, retailPrice: string, availability: string, type: string, themeGroup: string, theme: string, subTheme: string, tags: string) {
    let newSet: Set = new Set(name, parseInt(number), type, themeGroup, theme, subTheme, parseInt(year), tags, parseInt(pieces), parseInt(retailPrice), ageRange, packaging, availability);
    this.sendSet.emit(newSet);
  }
}

import { Component } from '@angular/core';
import { Set } from '../models/set.model';
import { SetService } from '../set.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [SetService]
})
export class AdminComponent {

  constructor(private setService: SetService) { }

  submitForm(name: string, number: number, type: string, themeGroup: string, theme: string, subTheme: string, yearReleased: number, tags: string, pieces: number, retailPrice: number, ageRange: string, packaging: string, availability: string, minifigs: number) {
      var newSet: Set = new Set(name, number, type, themeGroup, theme, subTheme, yearReleased, tags, pieces, retailPrice, ageRange, packaging, availability, minifigs);
      this.setService.addSet(newSet);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Set } from '../models/set.model';

@Component({
  selector: 'app-Set-list',
  templateUrl: './Set-list.component.html',
  styleUrls: ['./Set-list.component.css']
})
export class SetListComponent {
  @Input() childSetList: Set[];
  @Output() clickSender = new EventEmitter();
  filterByTheme: string = "displayNone";
  filterByYear: string = "displayNone";
  filterByCategory: string = "displayNone";

  onChange(optionFromMenu) {
    this.filterByTheme = optionFromMenu;
    this.filterByYear = optionFromMenu;
    this.filterByCategory = optionFromMenu;
  }

}

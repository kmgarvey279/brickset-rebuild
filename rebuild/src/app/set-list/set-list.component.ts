import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Set } from '../models/set.model';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.css']
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

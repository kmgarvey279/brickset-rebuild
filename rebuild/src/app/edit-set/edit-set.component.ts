import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Set } from '../models/set.model';

@Component({
  selector: 'app-edit-Set',
  templateUrl: './edit-Set.component.html',
  styleUrls: ['./edit-Set.component.css']
})
export class EditSetComponent {
  @Input() childSelectedSet: Set;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }
}

import { Component, Input, OnInit} from '@angular/core';
import { SetService } from '../set.service';

@Component({
  selector: 'app-edit-Set',
  templateUrl: './edit-Set.component.html',
  styleUrls: ['./edit-Set.component.css'],
  providers: [SetService]
})

export class EditSetComponent implements OnInit {
  @Input() selectedSet;

  constructor(private setService: SetService) {}

  ngOnInit() {

  }

  beginUpdatingSet(setToUpdate) {
    this.setService.updateSet(setToUpdate);
  }

  beginDeletingSet(setToDelete) {
    if(confirm("Are you sure you want to delete this set?")) {
      this.setService.deleteSet(setToDelete);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { SetService } from '../set.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Set } from '../models/set.model';

@Component({
  selector: 'app-wanted-sets',
  templateUrl: './wanted-sets.component.html',
  styleUrls: ['./wanted-sets.component.css'],
  providers: [SetService]
})
export class WantedSetsComponent implements OnInit {
  sets: FirebaseListObservable<any[]>
  filterByOwned: string = "wantedSets";

  constructor(private setService: SetService) { }

  ngOnInit() {
    this.sets = this.setService.getSets();
  }

}

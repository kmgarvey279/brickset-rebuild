import { Component, OnInit } from '@angular/core';
import { SetService } from '../set.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Set } from '../models/set.model';

@Component({
  selector: 'app-my-sets',
  templateUrl: './my-sets.component.html',
  styleUrls: ['./my-sets.component.css'],
  providers: [SetService]
})
export class MySetsComponent implements OnInit {
  sets: FirebaseListObservable<any[]>
  filterByOwned: string = "ownedSets";

  constructor(private setService: SetService) { }

  ngOnInit(){
    this.sets = this.setService.getSets();
  }
}

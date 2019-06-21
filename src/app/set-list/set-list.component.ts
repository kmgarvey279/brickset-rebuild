import { Component, Input, OnInit} from '@angular/core';
import { Set } from '../models/set.model';
import { Router } from '@angular/router';
import { SetService } from '../set.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Location } from '@angular/common';

@Component({
  selector: 'app-Set-list',
  templateUrl: './Set-list.component.html',
  styleUrls: ['./Set-list.component.css'],
  providers: [SetService]
})
export class SetListComponent implements OnInit {
  @Input() selectedSet;
  sets: FirebaseListObservable<any[]>
  currentRoute: string = this.router.url;
  filterByTheme: string = "displayNone";
  filterByYear: string = "displayNone";
  filterByCategory: string = "displayNone";

  constructor(private router: Router, private setService: SetService, private location: Location){}

  addToOwnedList(selectedSet:Set) {
      selectedSet.ownIt = !selectedSet.ownIt;
      this.setService.updateSet(selectedSet);
  }

  addToWantedList(selectedSet:Set) {
      selectedSet.wantIt = !selectedSet.wantIt;
      this.setService.updateSet(selectedSet);
  }

  ownColor(currentSet) {
    if(currentSet.ownIt == true) {
      return "bg-success";
    }
  }

  wantColor(currentSet) {
    if(currentSet.wantIt == true) {
      return "bg-warning";
    }
  }

  ngOnInit(){
    this.sets = this.setService.getSets();
  }

  goToDetailPage(clickedSet){
    this.router.navigate(['sets', clickedSet.$key]);
  };

  onChange(optionFromMenu) {
    this.filterByTheme = optionFromMenu;
    this.filterByYear = optionFromMenu;
    this.filterByCategory = optionFromMenu;
  }

  return() {
    this.location.back();
  }
}

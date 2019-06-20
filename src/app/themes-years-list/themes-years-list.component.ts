import { Component, OnInit} from '@angular/core';
import { Set } from '../models/set.model';
import { Router } from '@angular/router';
import { SetService } from '../set.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Location } from '@angular/common';

@Component({
  selector: 'app-themes-years-list',
  templateUrl: './themes-years-list.component.html',
  styleUrls: ['./themes-years-list.component.css'],
  providers: [SetService]
})
export class ThemesYearsListComponent implements OnInit {
  sets: FirebaseListObservable<any[]>
  currentRoute: string = this.router.url;
  filterByTheme: string = "displayNone";
  filterByYear: string = "displayNone";

  constructor(private router: Router, private setService: SetService, private location: Location) { }

  ngOnInit(){
    this.sets = this.setService.getSets();
  }

  showResults(clickedOption) {
    this.filterByTheme = clickedOption;
    this.filterByYear = clickedOption;
  }

  return() {
    this.location.back();
  }
}

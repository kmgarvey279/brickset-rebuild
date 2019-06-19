import { Component, OnInit} from '@angular/core';
import { Set } from '../models/set.model';
import { Router } from '@angular/router';
import { SetService } from '../set.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-Set-list',
  templateUrl: './Set-list.component.html',
  styleUrls: ['./Set-list.component.css'],
  providers: [SetService]
})
export class SetListComponent implements OnInit {
  sets: FirebaseListObservable<any[]>
  currentRoute: string = this.router.url;
  filterByTheme: string = "displayNone";
  filterByYear: string = "displayNone";
  filterByCategory: string = "displayNone";

  constructor(private router: Router, private setService: SetService){}

  ngOnInit(){
    this.sets = this.setService.getSets();
  }

  onChange(optionFromMenu) {
    this.filterByTheme = optionFromMenu;
    this.filterByYear = optionFromMenu;
    this.filterByCategory = optionFromMenu;
  }

  goToDetailPage(clickedSet){
    this.router.navigate(['sets', clickedSet.$key]);
  }
}

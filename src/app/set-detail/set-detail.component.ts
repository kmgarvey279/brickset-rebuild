import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Set } from '../models/set.model';
import { SetService } from '../set.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-set-detail',
  templateUrl: './set-detail.component.html',
  styleUrls: ['./set-detail.component.css'],
  providers: [SetService]
})
export class SetDetailComponent implements OnInit {
  setId: string;
  setToDisplay: Set;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private setService: SetService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.setId = urlParametersArray['id'];
    });
    this.setService.getSetById(this.setId).subscribe(dataLastEmittedFromObserver => {
      this.setToDisplay = new Set(dataLastEmittedFromObserver.name,
                                  dataLastEmittedFromObserver.number,
                                  dataLastEmittedFromObserver.type,
                                  dataLastEmittedFromObserver.themeGroup,
                                  dataLastEmittedFromObserver.theme,
                                  dataLastEmittedFromObserver.subTheme,
                                  dataLastEmittedFromObserver.yearReleased,
                                  dataLastEmittedFromObserver.tags,
                                  dataLastEmittedFromObserver.pieces,
                                  dataLastEmittedFromObserver.price,
                                  dataLastEmittedFromObserver.ageRange,
                                  dataLastEmittedFromObserver.packaging,
                                  dataLastEmittedFromObserver.availability)
    })
  }
}

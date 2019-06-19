import { Injectable } from '@angular/core';
import { Set } from './models/set.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SetService {
  sets: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.sets = database.list('sets');
  }

  getSets() {
    return this.sets;
  }

  addSet(newSet: Set) {
    this.sets.push(newSet);
  }

  getSetById(setId: string) {
    return this.database.object('sets/' + setId);
  }

  updateSet(localUpdatedSet) {
    var setEntryInFirebase = this.getSetById(localUpdatedSet.$key);
    setEntryInFirebase.update({name: localUpdatedSet.name,
                              number: localUpdatedSet.number,
                              type: localUpdatedSet.type,
                              themeGroup: localUpdatedSet.themeGroup,
                              theme: localUpdatedSet.theme,
                              subTheme: localUpdatedSet.subTheme,
                              yearReleased: localUpdatedSet.yearReleased,
                              tags: localUpdatedSet.tags,
                              pieces: localUpdatedSet.pieces,
                              retailPrice: localUpdatedSet.retailPrice,
                              ageRange: localUpdatedSet.ageRange,
                              packaging: localUpdatedSet.packaging,
                              availability: localUpdatedSet.availability});
  }

  deleteSet(localSetToDelete) {
    var setEntryInFirebase = this.getSetById(localSetToDelete.$key);
    setEntryInFirebase.remove();
  }
}

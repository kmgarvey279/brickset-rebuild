import { Set } from '../models/set.model';

export class User {
  public mySets: Set[] = [ ];
  public wantedSets: Set[] = [ ];

  constructor(public userName: string, public joinDate: Date, public country: string) {}

  addOwnedSet(setToAdd) {
    
  }

  addWantedSet(setToAdd) {

  }




}

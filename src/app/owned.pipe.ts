import { Pipe, PipeTransform } from '@angular/core';
import { Set } from './models/set.model';

@Pipe({
  name: "owned",
  pure: false
})

export class OwnedPipe implements PipeTransform {
  transform(input: Set[], ownedSets) {
    var output: Set[] = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].ownIt == true) {
        output.push(input[i]);
      }
    }
    return output;
  }
}

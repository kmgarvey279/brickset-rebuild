import { Pipe, PipeTransform } from '@angular/core';
import { Set } from './models/set.model';

@Pipe({
  name: "wanted",
  pure: false
})

export class WantedPipe implements PipeTransform {
  transform(input: Set[], wantedSets) {
    var output: Set[] = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].wantIt == true) {
        output.push(input[i]);
      }
    }
    return output;
  }
}

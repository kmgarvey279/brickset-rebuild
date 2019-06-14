import { Pipe, PipeTransform } from '@angular/core';
import { Set } from './models/set.model';

@Pipe({
  name: "year",
  pure: false
})

export class YearPipe implements PipeTransform {
  transform(input: Set[], desiredYear) {
    var output: Set[] = [];
    if(desiredYear == 2019) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2019) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2018) {
        for (let i = 0; i < input.length; i++) {
          if (input[i].yearReleased == 2018) {
            output.push(input[i]);
          }
        }
        return output;
    } else if (desiredYear == 2017) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2017) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

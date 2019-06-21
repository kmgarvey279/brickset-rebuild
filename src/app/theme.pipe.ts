import { Pipe, PipeTransform } from '@angular/core';
import { Set } from './models/set.model';

@Pipe({
  name: "theme",
  pure: false
})

export class ThemePipe implements PipeTransform {
  transform(input: Set[], desiredTheme) {
    var output: Set[] = [];
    if(desiredTheme == "Classic") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].theme == "Classic") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTheme == "Juniors") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].theme == "Juniors") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTheme == "City") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].theme == "City") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTheme == "Star Wars") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].theme == "Star Wars") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTheme == "Friends") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].theme == "Friends") {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}

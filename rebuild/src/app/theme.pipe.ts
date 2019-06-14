import { Pipe, PipeTransform } from '@angular/core';
import { Set } from './models/set.model';

@Pipe({
  name: "theme",
  pure: false
})

export class ThemePipe implements PipeTransform {
  transform(input: Set[], desiredTheme) {
    var output: Set[] = [];
    if(desiredTheme == "Pirates") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].theme == "Pirates") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTheme == "Space") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].theme == "Space") {
            output.push(input[i]);
          }
        }
        return output;
    } else if (desiredTheme == "Creator Expert") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].theme == "Creator Expert") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

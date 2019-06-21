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
    } else if (desiredTheme == "Junior") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].theme == "Junior") {
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
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Set } from './models/set.model';

@Pipe({
  name: "category",
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Set[], desiredCategory) {
    var output: Set[] = [];
    if(desiredCategory == "Normal") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].type == "Normal") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory == "Random") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].type == "Random") {
            output.push(input[i]);
          }
        }
        return output;
    } else if (desiredCategory == "Other") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].type == "Other") {
            output.push(input[i]);
          }
        }
      return output;
    } else if (desiredCategory == "Gear") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].type == "Gear") {
            output.push(input[i]);
          }
        }
      return output;
    } else if (desiredCategory == "Extended") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].type == "Extended") {
            output.push(input[i]);
          }
        }
      return output;
    } else if (desiredCategory == "Collection") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].type == "Collection") {
            output.push(input[i]);
          }
        }
      return output;
    } else if (desiredCategory == "Book") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].type == "Book") {
            output.push(input[i]);
          }
        }
      return output;
    }
  }
}

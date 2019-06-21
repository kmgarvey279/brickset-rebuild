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
    } else if (desiredYear == 2017) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2017) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2016) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2016) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2015) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2015) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2014) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2014) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2013) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2013) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2012) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2012) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2011) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2011) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2010) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2010) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2009) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2017) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2008) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2008) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2007) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2007) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2006) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2006) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2005) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2005) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2004) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2004) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2003) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2003) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2002) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2002) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2001) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2001) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYear == 2000) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].yearReleased == 2000) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}

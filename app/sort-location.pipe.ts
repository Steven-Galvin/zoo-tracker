import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "sortLocation",
  pure: false
})

export class SortLocationPipe implements PipeTransform {
  transform(input: Animal[], sortLocation) {
    var output: Animal[] = [];
    if(sortLocation === "mtOlympus") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].location === "Mt. Olympus") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(sortLocation === "hyrule") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].location === "Hyrule") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(sortLocation === "shipwreckCreek") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].location === "Shipwreck Creek") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(sortLocation === "spiralMountain") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].location === "Spiral Mountain") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "sort",
  pure: false
})

export class SortPipe implements PipeTransform {
  transform(input: Animal[], sortAnimal) {
    var output: Animal[] = [];
    if(sortAnimal === "youngins") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(sortAnimal === "veterans") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age > 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(sortAnimal === "male") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].sex === "Male") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(sortAnimal === "female") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].sex === "Female") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe ({ 
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], desiredFilter) {
    var output: Meal[] = [];

    if (desiredFilter === "under") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } if (desiredFilter === "over") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  } 
}
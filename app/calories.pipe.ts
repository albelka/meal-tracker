import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "byCalories",
  pure: false
})

export class ByCaloriesPipe implements PipeTransform {
  transform(input: Meal[], filterByCalories) {
    if(filterByCalories === "highCalorieMeals") {
      var output: Meal[] = [];
      for(var i=0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(filterByCalories === "lowCalorieMeals") {
        var output: Meal[] = [];
        for(var i=0; i < input.length; i++) {
          if (input[i].calories < 500) {
            output.push(input[i]);
          }
        }
        return output;
    } else {
      return input;
    }
  }
}

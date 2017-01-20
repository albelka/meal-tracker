import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'calorie-counter',
  template: `
    <h3> Total Calories: {{countCalories()}}</h3>
  `
})

export class CalorieCounterComponent {
  @Input() childMealList: Meal[];

  countCalories() {
    var total = 0;
    for(var i = 0; i < this.childMealList.length; i++) {
      total += this.childMealList[i].calories;
    }
    return total;
  }
}

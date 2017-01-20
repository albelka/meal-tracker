import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Meal Tracker</h1>
  <div class="container">
    <meal-list [childMealList]=masterMealList></meal-list>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
  </div>

  `
})

export class AppComponent {
  masterMealList: Meal[] = [
    new Meal('mac n cheese', 'with breadcrumbs', 333),
    new Meal('pizza', 'extra cheese', 322),
    new Meal('bagel', 'extra cream cheese', 277),
    new Meal('fondue', 'apples are good for you', 403),
    new Meal('salad', 'no dressing', 57),
  ];

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }

}

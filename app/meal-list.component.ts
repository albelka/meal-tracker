import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div *ngFor="let currentMeal of childMealList">
    <h4>{{currentMeal.name}}</h4>
    <p>{{currentMeal.details}}</p>
    <p>Calories: {{currentMeal.calories}}</p>
    <br>
    <button (click)="editMealButtonHasBeenClicked(currentMeal)">Edit</button>
  </div>
<hr>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editMealButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <h3>Only Show:</h3>
    <select (change)="onChange($event.target.value)">
      <option value="allMeals" selected="selected"> All Meals</option>
      <option value="highCalorieMeals">High Calorie Meals</option>
      <option value="lowCalorieMeals">Low Calorie Meals</option>
    </select>

  <div *ngFor="let currentMeal of childMealList | byCalories:filterByCalories">
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

  filterByCalories: string = "allMeals";

  editMealButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }
}

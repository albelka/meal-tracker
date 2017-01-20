import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="select">
  <h3>Show Me:</h3>
    <select (change)="onChange($event.target.value)">
      <option value="allMeals" selected="selected"> All Meals</option>
      <option value="highCalorieMeals">High Calorie Meals</option>
      <option value="lowCalorieMeals">Low Calorie Meals</option>
    </select>
    </div>
    <br>

  <div class="list" *ngFor="let currentMeal of childMealList | byCalories:filterByCalories">
    <h4>{{currentMeal.name}}</h4>
    <hr>
    <p>{{currentMeal.details}}</p>
    <p>Calories: {{currentMeal.calories}}</p>
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

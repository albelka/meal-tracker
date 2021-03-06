import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="header">
    <br>
    <br>
    <br>
    <br>
  </div>
  <h1>Meal Tracker</h1>
  <div class="container">

    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>

    <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>

    <calorie-counter [childMealList]="masterMealList"></calorie-counter>

    <new-meal (newMealSender)="addMeal($event)"></new-meal>

  </div>
  `
})

export class AppComponent {
  masterMealList: Meal[] = [
    new Meal('mac n cheese', 'with breadcrumbs', 333),
    new Meal('pizza', 'extra cheese', 522),
    new Meal('bagel', 'extra cream cheese', 277),
    new Meal('fondue', 'apples are good for you', 503),
    new Meal('salad', 'no dressing', 57),
  ];

  selectedMeal = null;

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }

  finishedEditing() {
    this.selectedMeal = null;
  }



}

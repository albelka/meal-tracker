import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: "new-meal",
  template: `
    <h1>New Meal</h1>
    <div class="form-group">
      <label>I Ate:</label>
      <input #newName class="form-control">
    </div>
    <div class="form-group">
      <label>Details:</label>
      <input #newDetails class="form-control">
    </div>
    <div class="form-group">
      <label>Calories:</label>
      <input type="number" #newCalories class="form-control">
    </div>
    <button (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">Add</button>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, parseInt(calories));
    this.newMealSender.emit(newMealToAdd);
  }

}

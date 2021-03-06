import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h3>{{childSelectedMeal.name}}</h3>
      <h3>Edit meal</h3>
      <div class="form-group">
        <label>I really ate:</label>
        <input [(ngModel)]="childSelectedMeal.name" [ngModelOptions]="{standalone: true}" class="form-control">
      </div>
      <div class="form-group">
        <label>Edit details:</label>
        <input [(ngModel)]="childSelectedMeal.details" [ngModelOptions]="{standalone: true}" class="form-control">
      </div>
      <div class="form-group">
        <label>Edit calories:</label>
        <input [(ngModel)]="childSelectedMeal.calories" [ngModelOptions]="{standalone: true}" type="number" class="form-control">
      </div>
    <button (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}

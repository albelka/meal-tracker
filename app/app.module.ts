import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { ByCaloriesPipe } from './calories.pipe';

@NgModule({
  imports: [ BrowserModule,
              FormsModule ],
  declarations: [ AppComponent,
                  MealListComponent,
                  NewMealComponent,
                  EditMealComponent,
                  ByCaloriesPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

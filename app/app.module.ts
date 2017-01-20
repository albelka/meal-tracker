import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MealListComponent } from './app.meal-list.compoonent'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,
                  MealListComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

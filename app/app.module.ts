import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { MealListComponent } from './mealList.component';
import { EditMealComponent } from './editMeal.component';
import { NewMealComponent } from './newMeal.component';
import { MealComponent } from './meal.component';
import { EditInputPipe } from './editInput.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    MealListComponent,
    EditMealComponent,
    NewMealComponent,
    MealListComponent,
    EditInputPipe
  ],  
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

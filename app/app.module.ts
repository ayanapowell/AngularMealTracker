<<<<<<< HEAD
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { MealListComponent } from './mealList.component';
import { EditMealComponent } from './editMeal.component';
import { NewMealComponent } from './newMeal.component';
import { MealComponent } from './meal.component';
import { EditInputPipe } from './editInput.pipe';

=======
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { MealDetailComponent } from './meal-detail.component';
import { DashboardComponent }  from './dashboard.component';
import { MealsComponent } from './all-meals.component';
import { NewComponent } from './add-new.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ 
    AppComponent,
    MealListComponent,
    EditMealComponent,
    NewMealComponent,
    MealListComponent,
    MealComponent,
    EditInputPipe  
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MealDetailComponent,
    MealsComponent,
    NewComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

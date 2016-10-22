import { Component, Output, EventEmitter } from '@angular/core';

import { Meal } from './meal';
import { MealDetailComponent } from './meal-detail.component';
import { MealsComponent } from './all-meals.component';


@Component({
  selector: 'new-meal',
  template: `
    <div class="container">
      <div class="well col-sm-6 add-meal">
        <h3>Add a new meal:</h3>
        <div class="form-group">
          <input #newName class="form-control" placeholder="What did you devour?">
        </div>
        <div class="form-group">
          <input #newDescription class="form-control" placeholder="description">
        </div>
        <div class="form-group">
          <input #newCalories class="form-control" placeholder="how many calories?">
        </div>
        <div class="form-group">
          <input #newId class="form-control" placeholder="id">
        </div>
        <button (click)="
        addClicked(newName.value, newDescription.value, newCalories.value, newId.value);
        newDescription.value='';
        newPriority.value='';
        newType.value='';
        " class="btn btn-default prompt">Add</button>
      </div>
    </div>
  `
})

export class NewComponent {
  title = "Meal Tracker";
}

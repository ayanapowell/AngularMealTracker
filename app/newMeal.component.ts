import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: "new-meal",
  template: `
  <div class="well">
    <div class="form-group">
      <input #newDate class="form-control" placeholder="date">
    </div>
    <div class="form-group">
      <input #newName class="form-control" placeholder="meal">
    </div>
    <div class="form-group">
      <textarea #newDetails class="form-control" placeholder="details"></textarea>
    </div>
    <div class="form-group">
      <input #newCalories class="form-control" placeholder="calories">
    </div>
    <button (click)="
      addClicked(newDate.value, newName.value, newDetails.value, newCalories.value);
      newDate.value='';
      newName.value='';
      newDetails.value='';
      newCalories.value='';
    " class="btn btn-default">submit</button>
  </div>
  `
  
  //templateUrl: "app/templates/newMeal.component.html"
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  addClicked(date: string, name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(date, name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
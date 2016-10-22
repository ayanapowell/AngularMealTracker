import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: "new-meal",
  templateUrl: "app/templates/newMeal.component.html"
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  addClicked(name: string, date: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, date, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
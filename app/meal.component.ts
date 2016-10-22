import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: "meal-display",
  template: `
    <h4>{{ meal.date }}</h4>
    <h3>{{ meal.name }}<span class="calories">  {{ meal.calories }} calories</span></h3>
    <p>{{ meal.details }}</p>
  `
})

export class MealComponent {
  @Input() meal: Meal;

}
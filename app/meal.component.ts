import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: "meal-display",
  template: `
    <table class="table">
      <thead class="thead-inverse">
        <tr>
          <th>Date</th>
          <th>Meal</th>
          <th>Details</th>
          <th>Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ meal.date }}</th>
          <td>{{ meal.name }}</td>
          <td>{{ meal.details }}</td>
          <td>{{ meal.calories }}</td>
        </tr>
      </tbody>
    </table>
  `
//  templateUrl: "app/templates/meal.component.html"
})

export class MealComponent {
  @Input() meal: Meal; 
}
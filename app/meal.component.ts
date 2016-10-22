import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: "meal-display",
  template: `
    <h3>{{ meal.name }}<span class="calories">  {{ meal.calories }} calories</span></h3>
    <p>{{ meal.details }}</p>
  
  `//  templateUrl: "app/templates/meal.component.html"   
    

})

export class MealComponent {
  @Input() meal: Meal;

}
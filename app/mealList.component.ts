import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: "meal-list",
  template: `
    <div *ngFor="let currentMeal of childMealList">
      <ul>
        <meal-display [meal]="currentMeal"></meal-display>
      </ul>
    </div>
  `
 // templateUrl: "app/templates/mealList.component.html"
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
}
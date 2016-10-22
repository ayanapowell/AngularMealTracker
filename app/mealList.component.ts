import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: "meal-list",
  template: `
    <div class="mealList">
      <div *ngFor="let currentMeal of childMealList" class="well">
        <meal-display [meal]="currentMeal"></meal-display>
        <button (click)="editButtonClicked(currentMeal)" class="btn btn-default">(Edit)</button>
      </div>
    </div>
   
  `
 // templateUrl: "app/templates/mealList.component.html"
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
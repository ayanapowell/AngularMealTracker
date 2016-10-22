import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: "meal-list",
  templateUrl: "app/templates/mealList.component.html"
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  public selectedFilter: string = "all";

  onChange(filterOption) {
    this.selectedFilter = filterOption;
  }
}
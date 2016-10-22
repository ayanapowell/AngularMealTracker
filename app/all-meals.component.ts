import { Component, OnInit } from '@angular/core';
import { Meal } from './meal';
import { MealDetailComponent } from './meal-detail.component';
import { MealService } from './meal.service';

@Component({
  selector: 'all-meals',
  template: `
    <div class="container">
    <div class="row">
      <div class="well col-sm-6">
        <h4>Your list of meals:</h4>
        <ul class="meals">
          <li *ngFor="let meal of meals"
            [class.selected]="meal === selectedMeal"
            (click)="onSelect(meal)">
          <strong>{{ meal.name }}</strong>: <span><em>{{ meal.description }}</em></span>
          <p>Calories: {{ meal.calories }}</p>
        </ul>
      </div>
      <div class="details col-sm-6">
        <meal-detail [meal]= "selectedMeal"></meal-detail>
      </div>
    </div>
    </div>
  `,
  providers: [MealService]
})

export class MealsComponent implements OnInit {
  meals: Meal[];
  selectedMeal: Meal;

  constructor(private mealService: MealService) { }

  getMeals(): void {
    this.mealService.getMeals().then(meals => this.meals = meals);
  }

  ngOnInit(): void {
    this.getMeals();
  }

  onSelect(meal:Meal): void {
    this.selectedMeal = meal;
  }


}

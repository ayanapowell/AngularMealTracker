import { Component, OnInit } from '@angular/core';
import { Meal } from './meal';
import { MealDetailComponent } from './meal-detail.component';
import { MealService } from './meal.service';

@Component({
  selector: 'all-meals',
  template: `
    <div class="container">
      <div class="well">
        <h4>Your list of meals:</h4>
        <ul class="meals">
          <li *ngFor="let meal of meals">
          <strong>{{ meal.name }}</strong>: <span><em>{{ meal.description }}</em></span>
          <p>Calories: {{ meal.calories }}</p>
        </ul>
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
}

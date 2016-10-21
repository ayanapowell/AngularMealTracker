import { Component, OnInit } from '@angular/core';
import { Meal } from './meal';
import { MealDetailComponent } from './meal-detail.component';
import { MealService } from './meal.service';

@Component({
  selector: 'meal-list',
  template: `
    <div class="container">
      <h4>Your list of meals:</h4>
        <div class="well">
          <ul class="meals">
            <li *ngFor="let currentMeal of meals">
            <span class="id">{{ meal.id }}</span>{{ meal.name }}
            <p>{{ meal.description }}</p>
            <p>Calories: {{ meal.calories }}</p>
          </ul>
        </div>
    </div>
  `
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

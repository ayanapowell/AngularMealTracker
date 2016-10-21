import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Meal } from './meal';
import { MealService } from './meal.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'templates/dashboard.component.html',
})

export class DashboardComponent implements OnInit {
  meals: Meal[] = [];

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.mealService.getMeals()
      .then(meals => this.meals = meals.slice(1,5));
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Meal } from './meal';
import { MealService } from './meal.service';
import { MealsComponent } from './all-meals.component';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  template: `
  <div class="container">
    <div class="well top-meals">
      <h3>Top Meals</h3>
      <div class="grid grid-pad">
        <div *ngFor="let meal of meals" (click)="gotoDetails(meal)" class="col-1-4">
          <div class="module hero">
            <h4>{{meal.name}}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})

export class DashboardComponent implements OnInit {
  meals: Meal[] = [];

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.mealService.getMeals()
      .then(meals => this.meals = meals.slice(1,5));
  }

  gotoDetails() {

  }

}

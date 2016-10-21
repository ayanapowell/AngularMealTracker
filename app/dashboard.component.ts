import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { Meal } from './meal';
import { MealService } from './meal.service';
import { MealsComponent } from './all-meals.component';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  template: `
  <div class="container row">
    <div class="well add-meal col-sm-6">
      <h3>Add new meal:</h3>
      <new-meal></new-meal>
    </div>
    <div class="well top-meals col-sm-4 pull-right">
      <h3>Top Meals:</h3>
      <div *ngFor="let meal of meals">
        <div class="module hero">
          <h4>{{meal.name}}<span>  {{ meal.calories }} calories</span></h4>
        </div>
      </div><br><br>
      <a routerLink="/meals" class="see-all">See all your meals</a>
    </div>
  </div>
  `
})

export class DashboardComponent implements OnInit {
  meals: Meal[] = [];
  selectedMeal: Meal;

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.mealService.getMeals()
      .then(meals => this.meals = meals.slice(1,5));
  }

  gotoDetails(meal: Meal) {
    this.selectedMeal = meal;
  }

  // gotoDetail(meal: Meal): void {
  //   let link = ['/detail', meal.id];
  //   this.router.navigate(link);
  // }

}

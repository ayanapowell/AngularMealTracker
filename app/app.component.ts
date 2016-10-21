import { Component } from '@angular/core';

import { Meal } from './meal';
import { MealDetailComponent } from './meal-detail.component';
import { MealsComponent } from './all-meals.component';


@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <div class="header">
        <h2>{{ title }}</h2>
        <nav>
          <a routerLink="/dashboard">Dashboard</a> |
          <a routerLink="/meals">All your meals</a>
        </nav>
      </div>
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  title = "Meal Tracker";
}

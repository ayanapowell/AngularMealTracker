import { Component } from '@angular/core';

import { Meal } from './meal';
import { MealDetailComponent } from './meal-detail.component';
import { MealsComponent } from './meals.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  `
})

export class AppComponent {
  title = "Meal Tracker";
}

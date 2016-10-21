import { Component } from '@angular/core';
import { Meal } from './meal.model';

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

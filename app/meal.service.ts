import { Injectable } from '@angular/core';

import { Meals } from './meal';
import { MEALS } from './mock-meal';

@Injectable()

export class MealService {
  getMeals(): Promise<Meal[]> {
    return Promise.resolve(MEALS);
  }

  getMealsSlowly(): Promise<Meal[]> {
    return new Promise<Meal[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getMeals());
  }

  getMeal(id: number): Promise<Meal> {
    return this.getMeals().then(meals => meals.find(meal => meal.id === id));
  }
}

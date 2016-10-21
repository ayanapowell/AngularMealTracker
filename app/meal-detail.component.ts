import { Component, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Params }  from '@angular/router';
import { Location }  from '@angular/common';

import { Meal } from './meal';
import { MealService } from './meal.service';
import { MealsComponent } from './all-meals.component';


@Component({
  moduleId: module.id,
  selector: 'meal-detail',
  template: `
    <div *ngIf='meal'>
      <div class="well">
        <h4>Edit this meal: {{ meal.name }}</h4>
        <div class="form-group">
          <label>name: </label>
          <input [(ngModel)]="meal.name" class="form-control" placeholder="name"/>
        </div>
        <div class="form-group">
          <label>description: </label>
          <input [(ngModel)]="meal.description" class="form-control"  placeholder="description"/>
        </div>
        <div class="form-group">
          <label>calories: </label>
          <input [(ngModel)]="meal.calories" class="form-control" placeholder="calories"/>
        </div>
      <!--<button (click)="goBack()" class="btn btn-default">Go Back</button>-->
    </div>
  </div>
  `
})

export class MealDetailComponent implements OnInit {
  @Input() meal: Meal;
  constructor(private mealService: MealService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.mealService.getMeal(id)
      .then(meal => this.meal = meal);
    });
  }

  goBack(): void {
    this.location.back();
  }
}

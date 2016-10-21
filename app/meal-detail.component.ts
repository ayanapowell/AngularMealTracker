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
  <div class="container">
    <div *ngIf='meal'>
      <div class="well">
      </div>
    </div>
    <button (click)="goBack()" class="btn btn-default">Go Back</button>
</div>
  `

})

export class MealDetailComponent implements OnInit {
  @Input() meal: Meal;
  @Output() clickSender = new EventEmitter();
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

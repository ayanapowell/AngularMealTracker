import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: "edit-meal",
  template: `
    <div class="editMeal">
      <div *ngIf="childSelectedMeal">
        <h3>Edit this meal:</h3>
        <div class="form-group">
          <input [(ngModel)]="childSelectedMeal.name" class="form-control">
        </div>
        <div class="form-group">
          <input [(ngModel)]="childSelectedMeal.date" class="form-control">
        </div>
        <div class="form-group">
          <input [(ngModel)]="childSelectedMeal.details" class="form-control">
        </div>
        <div class="form-group">
          <input [(ngModel)]="childSelectedMeal.calories" class="form-control">
        </div>
        <button (click)="doneClicked()" class="btn btn-default">Update</button>
      </div>
    </div>
  `
  //templateUrl: 'app/templates/editMeal.component.html'
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();

  doneClicked() {
    this.doneClickedSender.emit();
  }
}
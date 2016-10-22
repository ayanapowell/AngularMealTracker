import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <div class="header">
        <h1>{{ title }}</h1>
      </div>
      <div class="row">
        <div class="mealList col-sm-6"> 
          <h2>Your Meals:</h2>

          <meal-list 
            [childMealList]="masterMealList" 
            (clickSender)="showDetails($event)">
          </meal-list>

        </div>

        <div class="newMeal col-sm-4 col-sm-offset-1">
          <div class="row">
            <div class="col-sm-12">
              <h2>Add a meal:</h2>
              <new-meal
                (newMealSender)="addMeal($event)"
              ></new-meal>
            </div>
            <div class="row">
              <div class="col-sm-12 well">
                <edit-meal
                  [childSelectedMeal]="selectedMeal"
                  (doneClickedSender)="finishedEditing()"
                ></edit-meal>
              </div>
            </div>
          </div>
        </div>
        <div class="editMeal">
          <edit-meal
            [childSelectedMeal]="selectedMeal"
            (doneClickedSender)="finishedEditing()"
          ></edit-meal>
        </div>
      </div>
    </div>
  `
  //templateUrl: 'app/templates/app.component.html'
})

export class AppComponent {
  title = "Meal Tracker";
  public masterMealList: Meal[] = [
    new Meal("French fries", "01/01/16", "Only ate half", 500),
    new Meal("Cobb salad", "01/02/16", "Added chicken breast and light dressing", 400),
    new Meal("The Whole Bowl", "01/03/16", "No dairy for me", 300),
    new Meal("Navarre", "01/04/16", "Splurged with the chefs tasting menu", 655),
    new Meal("Veggie Omelette", "01/05/16", "Homecooked with no dairy", 300),
    new Meal("Movie popcorn", "01/06/16", "Size medium with light butter and salt", 600),
    new Meal("Beans and rice", "01/07/16", "So bland, ugh! Dumped Chalula everywhere", 388),
    new Meal("Nothing", "01/08/16", "I got lost in the woods for 2 days", 0),
    new Meal("Pasta Bolognese", "01/10/16", "So damn good after eating nothing for 2 days", 700),
    new Meal("Insects", "01/11/16", "I got lost in the woods again...", 20)
  ];

  selectedMeal: Meal = null;

  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }

  finishedEditing() {
    this.selectedMeal = null;
  }
}
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { MealDetailComponent } from './meal-detail.component';
import { MealsComponent } from './meals.component';
import { DashboardComponent }  from './dashboard.component';

import { MealService }  from './meal.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'meals',
        component: MealsComponent;
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: MealDetailComponent
      },

    ])
  ],
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MealDetailComponent,
    MealsComponent

  ],
  providers: [
    MealService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

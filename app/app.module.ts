import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { MealDetailComponent } from './meal-detail.component';
import { DashboardComponent }  from './dashboard.component';

import { MealService }  from './meal.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
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
  declarations: [
    AppComponent,
    DashboardComponent,
    MealDetailComponent
  ],
  providers: [
    MealService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

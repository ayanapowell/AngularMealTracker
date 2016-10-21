import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe ({ // this states that we are creating a new pipe
  name: "editInput",// name of the pipe
  pure: false
})

export class EditInputPipe implements PipeTransform {
  transform(input: Meal[], desiredEdit) {
    var output: Meal[] = [];
  } 
}
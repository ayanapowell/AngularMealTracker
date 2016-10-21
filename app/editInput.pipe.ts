import {Pipe, PipeTransform} from '@angular/core';
import { Meal } from './meal.model';

@Pipe ({ // this states that we are creating a new pipe
  name: "editInput"; // name of the pipe
  purse: false
})

export class EditInputPipe implements PipeTransform {
  
}
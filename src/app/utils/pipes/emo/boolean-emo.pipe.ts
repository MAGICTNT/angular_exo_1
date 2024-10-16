import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanEmo',
  standalone: true
})
export class BooleanEmoPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? "👍" : "👎";
  }

}

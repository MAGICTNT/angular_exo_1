import { Pipe, PipeTransform } from '@angular/core';

type order = "asc"| "desc";

@Pipe({
  name: 'orderTable',
  standalone: true
})
export class OrderTablePipe implements PipeTransform {

  transform(value: string[], order: order): string[] {
    switch(order){
      case "asc":{
        return value.sort();
      } 
      case "desc":{
        return value.sort().reverse();
      } 
    }
  }

}

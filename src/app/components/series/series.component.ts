import { Component } from '@angular/core';
import { OrderTablePipe } from "../../utils/pipes/order-table.pipe";
type order = "asc" | "desc";
type Series = 
  | "Breaking Bad" 
  | "Game of Thrones" 
  | "Stranger Things" 
  | "The Witcher" 
  | "The Mandalorian";

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [OrderTablePipe],
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
typeof(arg0: string) {
throw new Error('Method not implemented.');
}

  textButton: string = "decroisant";
  orderValue: boolean = true;
  orderChoix: order ="asc";

  series: Series[] = [
    "Breaking Bad", 
    "Game of Thrones", 
    "Stranger Things", 
    "The Witcher", 
    "The Mandalorian"
  ];

  delete(index: number): void {
    this.series.splice(index, 1);
  }
  order(): void{
    this.orderValue = ! this.orderValue;

    if(this.orderValue){
      this.textButton = "decroisant"; 
      this.orderChoix = "asc";
    }else{
      this.textButton = "croisant";
      this.orderChoix = "desc";
    }


  }
}

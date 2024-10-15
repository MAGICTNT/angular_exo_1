import { Component } from '@angular/core';

type Series = 
  | "Breaking Bad" 
  | "Game of Thrones" 
  | "Stranger Things" 
  | "The Witcher" 
  | "The Mandalorian";

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
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
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  series: string[] = ["la chose venu d'un autre monde", "matrix", "cube"];

  delete(index: number): void {
    this.series.splice(index, 1); // Supprime l'élément à l'index donné
  }
}

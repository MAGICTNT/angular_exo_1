import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  i : number = 0; 
  title = 'count';
  maClassA: string = 'blue'
  maClassB: string = 'red'
  color: object = {
    color: "red",
    backgroundColor: "blue"
  }
  add() : void{
    this.i++;
  }
  sub() : void{
    this.i--;
  }
}

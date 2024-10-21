import { Component, OnInit } from '@angular/core';
import { chuck } from '../../types/chuck.model';
import { ChuckService } from '../../services/chuck.service';

@Component({
  selector: 'app-chucknoris',
  standalone: true,
  imports: [],
  templateUrl: './chucknoris.component.html',
  styleUrl: './chucknoris.component.css'
})
export class ChucknorisComponent implements OnInit{
  chuck: chuck = {
    icon_url : "",
    id : "",
    url : "",
    value : ""
    }

    constructor(private chuckService: ChuckService){}

    ngOnInit(): void {
        this.newChuck()
    }

    newChuck(): void{
      this.chuckService.getJoke().subscribe((data: chuck) => {
        this.chuck = data
      })
    }
}

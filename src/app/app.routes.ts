import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { SeriesComponent } from './components/series/series.component';
import { LibrairieComponent } from './components/librairie/librairie.component';
import { PokeComponent } from './components/poke/poke.component';
import { ChuckService } from './services/chuck.service';
import { ChucknorisComponent } from './components/chucknoris/chucknoris.component';

export const routes: Routes = [
    {
        path: '', 
        title: "home",
        component: CounterComponent
    },
    {
        path: 'series',
        title: "exo serie",
        component: SeriesComponent
    },
    {
        path: 'books', 
        title: "exo livre",
        component: LibrairieComponent
    },
    {
        path: 'poke', 
        title: "exo pokemon",
        component: PokeComponent
    },
    {
        path: 'chuck', 
        title: "exo chuck",
        component: ChucknorisComponent
    }
];

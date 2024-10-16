import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { SeriesComponent } from './components/series/series.component';
import { LibrairieComponent } from './components/librairie/librairie.component';

export const routes: Routes = [
    {path: '', component: CounterComponent},
    {path: 'series', component: SeriesComponent},
    {path: 'books', component: LibrairieComponent}
];

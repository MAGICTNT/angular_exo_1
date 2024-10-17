import { Component, Input, Output } from '@angular/core';

interface Attack  {
  nom: string;
  description: string;
  degat: number;
};

interface Zone  {
  nom: string;
  region: string;
};

interface pokeType  {
  nom: string;
  description: string;
  type_list: string[];
  attaque_list: Attack[];
  zone: Zone;
};

@Component({
  selector: 'app-cards-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './cards-pokemon.component.html',
  styleUrl: './cards-pokemon.component.css'
})
export class CardsPokemonComponent {
@Input() poke!: pokeType
 randomNumber: number = Math.floor(Math.random() * 100) + 1;
  img: string = "https://lorempokemon.fakerapi.it/pokemon/200/"+this.randomNumber
}

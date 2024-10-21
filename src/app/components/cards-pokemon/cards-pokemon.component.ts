import { Component, EventEmitter, Input, Output } from '@angular/core';

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

type PokemonType = "feu"|"eau"

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

  getTypeColor(type:string):string{
    const typeColors: Record<PokemonType, string> = {
      feu: "bg-red-500",
      eau: "bg-blue-500"
    }
    return "";
  }

  @Output() dataEmitted = new EventEmitter<number>()

  sendData(id:number): void{
   this.dataEmitted.emit(id)
  console.log(id)
  }
}

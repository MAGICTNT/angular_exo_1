import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

type Attack = {
  nom: string;
  description: string;
  degat: number;
};

type Zone = {
  nom: string;
  region: string;
};

type pokeType = {
  nom: string;
  description: string;
  type_list: string[];
  attaque_list: Attack[];
  zone: Zone;
};

@Component({
  selector: 'app-poke',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './poke.component.html',
  styleUrl: './poke.component.css',
})
export class PokeComponent {
  newZone: Zone = {
    nom: '',
    region: '',
  };
  newAttack: Attack = {
    nom: '',
    description: '',
    degat: 0,
  };
  newPoke: pokeType = {
    nom: '',
    description: '',
    type_list: [],
    attaque_list: [],
    zone: this.newZone,
  };
  pokeList: pokeType[] = [];

  add_pokemon: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    type_list: new FormArray([new FormControl('')]),
    attaque_list: new FormArray([
      new FormGroup({
        nom: new FormControl('', []),
        description: new FormControl('', []),
        degat: new FormControl('', []),
      }),
    ]), // Utilisation de FormArray pour attaques
    zone: new FormGroup({
      nom: new FormControl('', []),
      region: new FormControl('', []),
    }),
  });

  get typeList() {
    return this.add_pokemon.get('type_list') as FormArray;
  }

  get attaqueList() {
    return this.add_pokemon.get('attaque_list') as FormArray;
  }

  createAttack(): FormGroup {
    return new FormGroup({
      nom: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      degat: new FormControl('', [Validators.required]),
    });
  }

  addType(): void {
    this.typeList.push(new FormControl(''));
  }
  deleteType(index: number): void {
    this.typeList.removeAt(index); // Suppression d'un type à l'index donné
  }

  addAttack(): void {
    this.attaqueList.push(
      new FormGroup({
        nom: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        degat: new FormControl('', [Validators.required]),
      })
    );
  }
  deleteAttack(index: number): void {
    this.attaqueList.removeAt(index); // Suppression d'une attaque à l'index donné
  }

  save_poke(): void {
    if (this.add_pokemon.valid) {
      console.log('Sauvegarde du Pokémon', this.add_pokemon.value);
      this.pokeList.push(this.add_pokemon.value);
      for (let i = this.attaqueList.length - 1; i > 0; i--) {
        this.deleteAttack(i);
      }
  
      // Suppression des types (en partant de la fin pour éviter les problèmes d'index)
      for (let i = this.typeList.length - 1; i > 0; i--) {
        this.deleteType(i);
      }
  
      this.add_pokemon.reset();
    }
  }

  deletePokemon(index: number) {
    this.pokeList.splice(index, 1); 
  }
  
}

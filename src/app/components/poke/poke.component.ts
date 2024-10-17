import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-poke',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './poke.component.html',
  styleUrl: './poke.component.css'
})
export class PokeComponent {
  add_pokemon: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    description: new FormControl("", [Validators.required]),
    type_list: new FormArray([new FormControl("")]),
    attaque_list: new FormArray(
      [
        new FormGroup({
          nom: new FormControl('', []),
          description: new FormControl('', []),
          degat: new FormControl('', []),
        })
      ]), // Utilisation de FormArray pour attaques
    zone: new FormGroup({
      nom: new FormControl('', []),
      region: new FormControl('', []),
    })
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
    this.typeList.push(new FormControl(""));
  }

  addAttack(): void {
    this.attaqueList.push(new FormGroup({
      nom: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      degat: new FormControl('', [Validators.required]),
    }));
  }

  save_poke(): void {
    if (this.add_pokemon.valid) {
      console.log("Sauvegarde du Pokémon", this.add_pokemon.value);
      this.add_pokemon.reset();
    }
  }}
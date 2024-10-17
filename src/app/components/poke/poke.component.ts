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
  add_pokemon: FormGroup = new FormGroup(
    {
      nom : new FormControl('', [
        Validators.required
      ]),
      description : new FormControl("", [
        Validators.required
      ]),
      type_list: new FormArray([
        new FormControl(""),
        new FormControl("")
      ]),
      attaque_list: new FormGroup({
        nom : new FormControl('',[]),
        desciption : new FormControl('',[]),
        degat : new FormControl('',[]),
      }),
      zone: new FormGroup({
        nom : new FormControl('',[]),
        region : new FormControl('',[]),
      })
      // création d'un objet
    } ,[] // posibiliter de créé des require
  )
  get typeList(){
    return this.add_pokemon.get('type_list') as FormArray;  
  }
  addType() : void{
    this.typeList.push(new FormControl(""))
  }
  
  save_poke(): void{
    if(this.add_pokemon.valid){
      console.log("sauvegarde de la formation ", this.add_pokemon.value)
      this.add_pokemon.reset()
    }
  }
}

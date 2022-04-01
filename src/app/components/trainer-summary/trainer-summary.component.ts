import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-trainer-summary',
  templateUrl: './trainer-summary.component.html',
  styleUrls: ['./trainer-summary.component.css']
})
export class TrainerSummaryComponent {

  constructor(private userService: UserService,
    ) {}

  // getter function for template
  // returns the users's username
  get username(): string {
      return this.userService.user.username;
  }
  // a getter function for getting pokemons
  get pokemons(): string[] {
    let user = JSON.parse(sessionStorage.getItem('trainer-session') || '{}')
    let pokemons = user["pokemon"]
    let pokemonsArray = []
    for(let pokemon in pokemons){
      pokemonsArray.push(pokemons[pokemon])
    }
    return(pokemonsArray)
}
// function for getting pokemons and put them in array and showing the id
get pokemonsId(): any {
  let user = JSON.parse(sessionStorage.getItem('trainer-session') || '{}')
  let pokemons = user["pokemon"]
  let pokemonsIdArray = []
  for(let pokemon in pokemons){
    pokemonsIdArray.push(sessionStorage.getItem(pokemons[pokemon]))
  }
  return(pokemonsIdArray)
}
// a function for deleting pokemons from the user and API
onPokemonreleaseClick(pokemon:string): void{
  this.userService.releasePokemon(pokemon);
}

}
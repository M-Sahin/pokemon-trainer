import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { UserService } from 'src/app/services/user.service';
import { PokemonCatalogueService } from '../../services/pokemon-catalogue.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemons: Pokemon[] = [];
  @Input() pokemonId: string[] = [];

  constructor(
    private userService: UserService,
    private readonly PokemonCatalogueService: PokemonCatalogueService

  ) { }

  onCatchClick(pokemonName:string): void{
    this.userService.addPokemon(pokemonName);
  }

  onDeleteClick(): void{
    this.userService.deletePokemons();
  }

  onPageClick(page:any): void{
    this.PokemonCatalogueService.findAllPokemons(page);
  }

  ngOnInit(): void {
  }

}

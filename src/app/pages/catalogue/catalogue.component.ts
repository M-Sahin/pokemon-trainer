import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CataloguePage {

  get pokemons(): Pokemon[]{

    return this.pokemonCatalogueService.pokemons;
  }

  get loading(): boolean{

    return this.pokemonCatalogueService.loading;
  }

  get _pokemonId(): string[]{

    return this.pokemonCatalogueService.pokemonId;
  }


  get error(): string{

    return this.pokemonCatalogueService.error;
  }
  constructor(
    private readonly pokemonCatalogueService: PokemonCatalogueService
  ) { }


  ngOnInit(): void {
    this.pokemonCatalogueService.savePokemons()
    this.pokemonCatalogueService.findAllPokemons(0);
  }
  // added pagination
  pagination(page:number): void {
    this.pokemonCatalogueService.findAllPokemons(page);
  }

}

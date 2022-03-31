import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { finalize } from 'rxjs';

const { } = environment;

environment
@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogueService {
private _pokemons:Pokemon[] = [];
private _error:string = "";
private _pokemonId:string[] = [];
private _loading:boolean = false;

get loading(): boolean{
  return this._loading;
}

get pokemons(): Pokemon[]{
  return this._pokemons;
}

get error(): string{

  return this._error;
}

get pokemonId(): string[]{

  return this._pokemonId;
}
  constructor(private readonly http: HttpClient) { }


  public findAllPokemons(pagination: any): void {
    this.http.get<Pokemon[]>(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=` + pagination)
    .pipe(
      finalize(() => {
        this._loading = false;
      }))
    .subscribe({
      next: (pokemon: any) => {
        this._pokemons = pokemon.results;
        this._pokemons.map((pokemon)=>{
          let  urlArray = pokemon.url.split('/');
          pokemon.id=urlArray[6]
        })
      },
      error: (error: HttpErrorResponse) => {
        this._error = error.message;
      },
    });
  }
}

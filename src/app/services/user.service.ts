import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})

// service for every user related API interaction
export class UserService {
  // initialize empty user object
  private _user: User = <User>{};

  // getter function for user
  get user(): User {
    return this._user;
  }

  // setter function for user
  set user(user: User) {
    // stringify user object and store in session storage
    sessionStorage.setItem('trainer-session', JSON.stringify(user));
    // replace the private user variable with the new object
    this._user = user;
  }

  constructor(private readonly http: HttpClient, private router: Router) {
    // check session storage for an existing user when calling this service
    this._user = JSON.parse(sessionStorage.getItem('trainer-session') || '{}');
  }

  // helper function for creating http headers
  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-Key': 'T/wnxnVqkS3YQnMBM70eag==',
    });
  }

  // a function that logs in the user if it already exists in the API
  // or
  // creates new user in the API with no pokemons
  public loginOrRegisterUser(username: string): void {
    const headers = this.createHeaders();
    this.http
      .get<User[]>(
        `https://mm-assignment-api.herokuapp.com/trainers?username=${username}`
      )
      .subscribe((users: User[]) => {
        // if API response is [] i.e. user doesn't exist
        if (!Object.keys(users).length) {
          this.http
            .post(
              'https://mm-assignment-api.herokuapp.com/trainers',
              JSON.stringify({
                username: username,
                pokemon: [],
              }),
              {
                headers,
              }
            )
            .subscribe((response: any) => {
              // use the setter to update session storage and state
              this.user = response;
              // redirect to the main page -> catalogue page
              this.router.navigateByUrl('/catalogue');
            });
        }
        // API response wasn't empty, meaning username already exists
        else {
          // use the setter to update session storage and state
          // GET returns an array from the API, hence the [0]
          this.user = users[0];
          // redirect to the main page
          this.router.navigateByUrl('/catalogue');
        }
      });
  }
// function for adding pokemons to user id and storing it on API and sessionstorage
  public addPokemon(pokemonName:string):void{
    const headers = this.createHeaders();
    this.http
    .get<User[]>(
      `https://mm-assignment-api.herokuapp.com/trainers/${this.user.id}`
    ).subscribe((response:any)=>{
      let currentPokemons:string[] = response["pokemon"];
      currentPokemons.push(pokemonName);
      this.http
      .patch(`https://mm-assignment-api.herokuapp.com/trainers/${this.user.id}`,{
        "pokemon" : currentPokemons
      },{
        headers
      }).subscribe((response)=>{
        sessionStorage.setItem('trainer-session', JSON.stringify(response));
        console.log(sessionStorage.getItem('trainer-session'))

      })
    })
  }
  // function for deleting pokemons from user id
  public deletePokemons():void{
    const headers = this.createHeaders();
    this.http

      let currentPokemons:string[] = [];
      this.http
      .patch(`https://mm-assignment-api.herokuapp.com/trainers/${this.user.id}`,{
        "pokemon" : currentPokemons
      },{
        headers
      }).subscribe((response)=>{
        sessionStorage.setItem('trainer-session', JSON.stringify(response));
      })
  }
  // function for deleting pokemons from user id
  public releasePokemon(pokemon:string): void {
    console.log(pokemon)
    const headers = this.createHeaders();
    this.http
    .get<User[]>(
      `https://mm-assignment-api.herokuapp.com/trainers/${this.user.id}`
    ).subscribe((response:any)=>{
      let currentPokemons:string[] = response["pokemon"];
      currentPokemons.map((currentPokemon, index)=>{
        if (currentPokemon == pokemon){
          console.log(index)
          currentPokemons.splice(index, 1)
        }

      })
      console.log(currentPokemons)
      this.http
      .patch(`https://mm-assignment-api.herokuapp.com/trainers/${this.user.id}`,{
        "pokemon" : currentPokemons
      },{
        headers
      }).subscribe((response)=>{
        sessionStorage.setItem('trainer-session', JSON.stringify(response));
        console.log(sessionStorage.getItem('trainer-session'))

      })
    })
  }

  // function for clearing user from session storage and routing back to default page -> login screen
  public logout(): void {
    // clear user from session storage
    sessionStorage.removeItem('trainer-session');
    // set empty user object
    this._user = <User>{};
    // redirect to login page
    this.router.navigateByUrl('/login');
  }

  // public funtion to check if user is logged in
  public userIsLoggedIn(): boolean {
    // if user object is not empty
    if (Object.keys(this._user).length !== 0) {
      return true;
    } else {
      return false;
    }
  }
}


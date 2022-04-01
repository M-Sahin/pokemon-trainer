import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-trainer-summary',
  templateUrl: './trainer-summary.component.html',
  styleUrls: ['./trainer-summary.component.css']
})
export class TrainerSummaryComponent {

  constructor(private userService: UserService) {}

  // getter function for template
  // returns the users's username
  get username(): string {
      return this.userService.user.username;
  }
  get currentPokemons(): string {
      return this.currentPokemons
  }
}
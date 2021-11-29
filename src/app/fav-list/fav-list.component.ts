import { Component, Input, OnInit } from '@angular/core';
import Character from '../models/Character';
import { StateService } from '../state.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.scss']
})
export class FavListComponent implements OnInit {

  characters: Character[] = [];
  @Input() verLista = false;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.favoriteCharacters$.subscribe(favoriteCharacters => this.characters = favoriteCharacters);
  }

  removeFavorite(character: Character) {
    character.favorite = false;
    this.stateService.updateCharacter(character);
  }

}

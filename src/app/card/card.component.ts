import { Component, Input, OnInit } from '@angular/core';
import Character from '../models/Character';
import { StateService } from '../state.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() character: Character = {} as Character;

  favoritos: Character[] = [];

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.favoriteCharacters$.subscribe( favoritos => this.favoritos = favoritos);
  }

  toggleFavorite() {
    if (!this.character.favorite && this.favoritos.length === 5) {
      alert('Sólo se permiten Máx. 5 Favoritos');
      return;
    }
    this.character.favorite = !this.character.favorite;
    this.stateService.updateCharacter(this.character);
  }

}

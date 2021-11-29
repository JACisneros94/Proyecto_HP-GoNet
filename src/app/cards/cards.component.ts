import { Component, OnInit } from '@angular/core';
import Character from '../models/Character';
import { StateService } from '../state.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  characters: Character[] = [];
  loading = true;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.filteredCharacters$.subscribe(characters => this.characters = characters);
    this.stateService.loading$.subscribe(loading => this.loading = loading);
  }

}

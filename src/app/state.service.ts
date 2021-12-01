import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { ApiService } from './api.service';
import Character from './models/Character';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _characters = new BehaviorSubject<Character[]>([]);
  private _loading = new BehaviorSubject<boolean>(true);
  private _activeFilter = new BehaviorSubject<string>('');

  constructor(private api: ApiService) {
    this.initCharacters();
   }

  get characters$() {
    return this._characters.asObservable();
  }

  get activeFilter$() {
    return this._activeFilter.asObservable();
  }

  get loading$() {
    return this._loading.asObservable();
  }

  get filteredCharacters$() {
    return combineLatest([this.characters$, this.activeFilter$]).pipe(map(([characters, activeFilter]) => {
      return !activeFilter ? characters : characters.filter( character =>
        activeFilter === 'student' ? character.hogwartsStudent : activeFilter === 'dead' ? !character.alive : character.hogwartsStaff);
    }));
  }

  get favoriteCharacters$() {
    return this.characters$.pipe(map(characters => characters.filter(character => character.favorite)));
  }

  initCharacters() {
    this.api.getCharacters().subscribe( characters => {
      this._characters.next(characters.sort((a, b) => (b.id || 0) - (a.id || 0)));
      this._loading.next(false);
    });
  }

  updateCharacter(character: Character) {
    this.api.updateCharacter(character).subscribe(response => {
      const characters = this._characters.getValue();
      const newCharacters = characters.map(characterItem => characterItem.id === character.id ? character : characterItem);
      this._characters.next(newCharacters);
    });
  }

  updateActiveFilter(activeFilter: string) {
    this._activeFilter.next(activeFilter);
  }

  addCharacter(character: Character, exito: () => void) {
    this.api.addCharacter(character).subscribe(response => {
      const characters = this._characters.getValue();
      characters.unshift(character);
      this._characters.next(characters);
      exito();
    });
  }

}

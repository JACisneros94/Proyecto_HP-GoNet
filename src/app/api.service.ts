import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import Character from './models/Character';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) {}

  get url() {
    return `${environment.api}/characters`;
  }

  getCharacters(): Observable<Character[]> {

    return this.http.get<Character[]>(this.url);

  }

  addCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(this.url, {...character, id:Date.now()});
  }

  updateCharacter(character: Character): Observable<Character> {
    console.log(character);
    
    return this.http.patch<Character>(this.url+'/'+ character.id, character);
  }

}
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

  /* getCharacters(): Observable<Character[]> {

    return this.http.get<Character[]>(this.url);

  }

  addCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(this.url, {...character, id:Date.now()});
  }

  updateCharacter(character: Character): Observable<Character> {
    return this.http.patch<Character>(this.url+'/'+ character.id, character);
  } */

  //-------------------------------

  updateCharacter(character: Character): Observable<Character> {
    if (environment.production) {
      let characters = localStorage.getItem('characters') || '[]';
      const charactersJson = JSON.parse(characters) as Character[];
      const newCharacters = charactersJson.map(c => c.id == character.id ? character : c);
      localStorage.setItem('characters', JSON.stringify(newCharacters));
      return new Observable((observer) => {
        observer.next(character);
      });
    }

    return this.http.patch<Character>(this.url+'/'+ character.id, character);
  }

  addCharacter(character: Character): Observable<Character> {
    if (environment.production) {
      let characters = localStorage.getItem('characters') || '[]';
      const charactersJson = JSON.parse(characters) as Character[];
      const newCharacters = [...charactersJson, character];
      localStorage.setItem('characters', JSON.stringify(newCharacters));
      return new Observable((observer) => {
        observer.next(character);
      });
    }

    return this.http.post<Character>(this.url, {...character, id:Date.now()});
  }

  getCharacters(): Observable<Character[]> {
    if (environment.production) {
      let characters = localStorage.getItem('characters');
      if (characters == null || characters == '') {
        characters = `[{
          "name": "Argus Filch",
          "species": "human",
          "gender": "male",
          "house": "",
          "dateOfBirth": "",
          "yearOfBirth": "",
          "ancestry": "squib",
          "eyeColour": "",
          "hairColour": "grey",
          "wand": {
            "wood": "",
            "core": "",
            "length": ""
          },
          "patronus": "",
          "hogwartsStudent": false,
          "hogwartsStaff": true,
          "actor": "David Bradley",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/filch.jpg",
          "id": 1
        },
        {
          "name": "Mrs Norris",
          "species": "cat",
          "gender": "female",
          "house": "",
          "dateOfBirth": "",
          "yearOfBirth": "",
          "ancestry": "",
          "eyeColour": "yellow",
          "hairColour": "brown",
          "wand": {
            "wood": "",
            "core": "",
            "length": ""
          },
          "patronus": "",
          "hogwartsStudent": false,
          "hogwartsStaff": true,
          "actor": "Maxime, Alanis and Tommy the cats",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/norris.JPG",
          "id": 2
        },
        {
          "name": "Gregory Goyle",
          "species": "human",
          "gender": "male",
          "house": "Slytherin",
          "dateOfBirth": "",
          "yearOfBirth": "",
          "ancestry": "pure-blood",
          "eyeColour": "",
          "hairColour": "brown",
          "wand": {
            "wood": "",
            "core": "",
            "length": ""
          },
          "patronus": "",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Josh Herdman",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/goyle.jpg",
          "id": 3
        },
        {
          "name": "Vincent Crabbe",
          "species": "human",
          "gender": "male",
          "house": "Slytherin",
          "dateOfBirth": "",
          "yearOfBirth": "",
          "ancestry": "pure-blood",
          "eyeColour": "black",
          "hairColour": "black",
          "wand": {
            "wood": "",
            "core": "",
            "length": ""
          },
          "patronus": "",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Jamie Waylett",
          "alive": false,
          "image": "http://hp-api.herokuapp.com/images/crabbe.jpg",
          "id": 4
        },
        {
          "name": "Lucius Malfoy",
          "species": "human",
          "gender": "male",
          "house": "Slytherin",
          "dateOfBirth": "",
          "yearOfBirth": 1954,
          "ancestry": "pure-blood",
          "eyeColour": "grey",
          "hairColour": "blonde",
          "wand": {
            "wood": "elm",
            "core": "dragon heartstring",
            "length": 18
          },
          "patronus": "",
          "hogwartsStudent": false,
          "hogwartsStaff": false,
          "actor": "Jason Isaacs",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/lucius.jpg",
          "id": 5
        },
        {
          "name": "Dolores Umbridge",
          "species": "human",
          "gender": "female",
          "house": "Slytherin",
          "dateOfBirth": "",
          "yearOfBirth": "",
          "ancestry": "half-blood",
          "eyeColour": "brown",
          "hairColour": "grey",
          "wand": {
            "wood": "birch",
            "core": "dragon heartstring",
            "length": 8
          },
          "patronus": "persian cat",
          "hogwartsStudent": false,
          "hogwartsStaff": true,
          "actor": "Imelda Staunton",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/umbridge.jpg",
          "id": 6
        },
        {
          "name": "Kingsley Shacklebolt",
          "species": "human",
          "gender": "male",
          "house": "",
          "dateOfBirth": "",
          "yearOfBirth": "",
          "ancestry": "pure-blood",
          "eyeColour": "brown",
          "hairColour": "brown",
          "wand": {
            "wood": "",
            "core": "",
            "length": ""
          },
          "patronus": "lynx",
          "hogwartsStudent": false,
          "hogwartsStaff": false,
          "actor": "George Harris",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/kingsley.jpg",
          "id": 7
        },
        {
          "name": "Horace Slughorn",
          "species": "human",
          "gender": "male",
          "house": "Slytherin",
          "dateOfBirth": "",
          "yearOfBirth": "",
          "ancestry": "pure-blood",
          "eyeColour": "green",
          "hairColour": "blonde",
          "wand": {
            "wood": "cedar",
            "core": "dragon heartstring",
            "length": 10.25
          },
          "patronus": "",
          "hogwartsStudent": false,
          "hogwartsStaff": true,
          "actor": "Jim Broadbent",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/slughorn.JPG",
          "id": 8
        },
        {
          "name": "Lord Voldemort",
          "species": "human",
          "gender": "male",
          "house": "Slytherin",
          "dateOfBirth": "31-12-1926",
          "yearOfBirth": 1926,
          "ancestry": "half-blood",
          "eyeColour": "red",
          "hairColour": "bald",
          "wand": {
            "wood": "yew",
            "core": "phoenix feather",
            "length": 13.5
          },
          "patronus": "",
          "hogwartsStudent": false,
          "hogwartsStaff": false,
          "actor": "Ralph Fiennes",
          "alive": false,
          "image": "http://hp-api.herokuapp.com/images/voldemort.jpg",
          "id": 9
        },
        {
          "name": "Bellatrix Lestrange",
          "species": "human",
          "gender": "female",
          "house": "Slytherin",
          "dateOfBirth": "",
          "yearOfBirth": 1951,
          "ancestry": "pure-blood",
          "eyeColour": "brown",
          "hairColour": "black",
          "wand": {
            "wood": "walnut",
            "core": "dragon heartstring",
            "length": 12.75
          },
          "patronus": "",
          "hogwartsStudent": false,
          "hogwartsStaff": false,
          "actor": "Helena Bonham Carter",
          "alive": false,
          "image": "http://hp-api.herokuapp.com/images/bellatrix.jpg",
          "id": 10
        },
        {
          "name": "Arthur Weasley",
          "species": "human",
          "gender": "male",
          "house": "Gryffindor",
          "dateOfBirth": "06-02-1950",
          "yearOfBirth": 1950,
          "ancestry": "pure-blood",
          "eyeColour": "blue",
          "hairColour": "red",
          "wand": {
            "wood": "",
            "core": "",
            "length": ""
          },
          "patronus": "weasel",
          "hogwartsStudent": false,
          "hogwartsStaff": false,
          "actor": "Mark Williams",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/arthur.jpg",
          "id": 11
        },
        {
          "name": "Remus Lupin",
          "species": "werewolf",
          "gender": "male",
          "house": "Gryffindor",
          "dateOfBirth": "10-03-1960",
          "yearOfBirth": 1960,
          "ancestry": "half-blood",
          "eyeColour": "green",
          "hairColour": "brown",
          "wand": {
            "wood": "cypress",
            "core": "unicorn tail-hair",
            "length": 10.25
          },
          "patronus": "wolf",
          "hogwartsStudent": false,
          "hogwartsStaff": true,
          "actor": "David Thewlis",
          "alive": false,
          "image": "http://hp-api.herokuapp.com/images/lupin.jpg",
          "id": 12
        },
        {
          "name": "Sirius Black",
          "species": "human",
          "gender": "male",
          "house": "Gryffindor",
          "dateOfBirth": "03-11-1959",
          "yearOfBirth": 1959,
          "ancestry": "pure-blood",
          "eyeColour": "grey",
          "hairColour": "black",
          "wand": {
            "wood": "",
            "core": "",
            "length": ""
          },
          "patronus": "hare",
          "hogwartsStudent": false,
          "hogwartsStaff": false,
          "actor": "Gary Oldman",
          "alive": false,
          "image": "http://hp-api.herokuapp.com/images/sirius.JPG",
          "id": 13,
          "favorite": false
        },
        {
          "name": "Ginny Weasley",
          "species": "human",
          "gender": "female",
          "house": "Gryffindor",
          "dateOfBirth": "11-08-1981",
          "yearOfBirth": 1981,
          "ancestry": "pure-blood",
          "eyeColour": "brown",
          "hairColour": "red",
          "wand": {
            "wood": "yew",
            "core": "",
            "length": ""
          },
          "patronus": "horse",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Bonnie Wright",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/ginny.jpg",
          "id": 14
        },
        {
          "name": "Luna Lovegood",
          "species": "human",
          "gender": "female",
          "house": "Ravenclaw",
          "dateOfBirth": "13-02-1981",
          "yearOfBirth": 1981,
          "ancestry": "",
          "eyeColour": "grey",
          "hairColour": "blonde",
          "wand": {
            "wood": "",
            "core": "",
            "length": ""
          },
          "patronus": "hare",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Evanna Lynch",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/luna.jpg",
          "id": 15
        },
        {
          "name": "Neville Longbottom",
          "species": "human",
          "gender": "male",
          "house": "Gryffindor",
          "dateOfBirth": "30-07-1980",
          "yearOfBirth": 1980,
          "ancestry": "pure-blood",
          "eyeColour": "",
          "hairColour": "blonde",
          "wand": {
            "wood": "cherry",
            "core": "unicorn tail-hair",
            "length": 13
          },
          "patronus": "",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Matthew Lewis",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/neville.jpg",
          "id": 16
        },
        {
          "name": "Rubeus Hagrid",
          "species": "half-giant",
          "gender": "male",
          "house": "Gryffindor",
          "dateOfBirth": "06-12-1928",
          "yearOfBirth": 1928,
          "ancestry": "half-blood",
          "eyeColour": "black",
          "hairColour": "black",
          "wand": {
            "wood": "oak",
            "core": "",
            "length": 16
          },
          "patronus": "",
          "hogwartsStudent": false,
          "hogwartsStaff": true,
          "actor": "Robbie Coltrane",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/hagrid.png",
          "id": 17
        },
        {
          "name": "Severus Snape",
          "species": "human",
          "gender": "male",
          "house": "Slytherin",
          "dateOfBirth": "09-01-1960",
          "yearOfBirth": 1960,
          "ancestry": "half-blood",
          "eyeColour": "black",
          "hairColour": "black",
          "wand": {
            "wood": "",
            "core": "",
            "length": ""
          },
          "patronus": "doe",
          "hogwartsStudent": false,
          "hogwartsStaff": true,
          "actor": "Alan Rickman",
          "alive": false,
          "image": "http://hp-api.herokuapp.com/images/snape.jpg",
          "id": 18
        },
        {
          "name": "Cho Chang",
          "species": "human",
          "gender": "female",
          "house": "Ravenclaw",
          "dateOfBirth": "",
          "yearOfBirth": "",
          "ancestry": "",
          "eyeColour": "brown",
          "hairColour": "black",
          "wand": {
            "wood": "",
            "core": "",
            "length": ""
          },
          "patronus": "swan",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Katie Leung",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/cho.jpg",
          "id": 19
        },
        {
          "name": "Cedric Diggory",
          "species": "human",
          "gender": "male",
          "house": "Hufflepuff",
          "dateOfBirth": "",
          "yearOfBirth": 1977,
          "ancestry": "",
          "eyeColour": "grey",
          "hairColour": "brown",
          "wand": {
            "wood": "ash",
            "core": "unicorn hair",
            "length": 12.25
          },
          "patronus": "",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Robert Pattinson",
          "alive": false,
          "image": "http://hp-api.herokuapp.com/images/cedric.png",
          "id": 20,
          "favorite": false
        },
        {
          "name": "Minerva McGonagall",
          "species": "human",
          "gender": "female",
          "house": "Gryffindor",
          "dateOfBirth": "04-10-1925",
          "yearOfBirth": 1925,
          "ancestry": "",
          "eyeColour": "",
          "hairColour": "black",
          "wand": {
            "wood": "",
            "core": "",
            "length": ""
          },
          "patronus": "tabby cat",
          "hogwartsStudent": false,
          "hogwartsStaff": true,
          "actor": "Dame Maggie Smith",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/mcgonagall.jpg",
          "id": 21,
          "favorite": false
        },
        {
          "name": "Draco Malfoy",
          "species": "human",
          "gender": "male",
          "house": "Slytherin",
          "dateOfBirth": "05-06-1980",
          "yearOfBirth": 1980,
          "ancestry": "pure-blood",
          "eyeColour": "grey",
          "hairColour": "blonde",
          "wand": {
            "wood": "hawthorn",
            "core": "unicorn tail-hair",
            "length": 10
          },
          "patronus": "",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Tom Felton",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/draco.jpg",
          "id": 22,
          "favorite": false
        },
        {
          "name": "Ron Weasley",
          "species": "human",
          "gender": "male",
          "house": "Gryffindor",
          "dateOfBirth": "01-03-1980",
          "yearOfBirth": 1980,
          "ancestry": "pure-blood",
          "eyeColour": "blue",
          "hairColour": "red",
          "wand": {
            "wood": "willow",
            "core": "unicorn tail-hair",
            "length": 14
          },
          "patronus": "Jack Russell terrier",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Rupert Grint",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/ron.jpg",
          "id": 23,
          "favorite": false
        },
        {
          "name": "Hermione Granger",
          "species": "human",
          "gender": "female",
          "house": "Gryffindor",
          "dateOfBirth": "19-09-1979",
          "yearOfBirth": 1979,
          "ancestry": "muggleborn",
          "eyeColour": "brown",
          "hairColour": "brown",
          "wand": {
            "wood": "vine",
            "core": "dragon heartstring",
            "length": ""
          },
          "patronus": "otter",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Emma Watson",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/hermione.jpeg",
          "id": 24,
          "favorite": false
        },
        {
          "name": "Harry Potter",
          "species": "human",
          "gender": "male",
          "house": "Gryffindor",
          "dateOfBirth": "31-07-1980",
          "yearOfBirth": 1980,
          "ancestry": "half-blood",
          "eyeColour": "green",
          "hairColour": "black",
          "wand": {
            "wood": "holly",
            "core": "phoenix feather",
            "length": 11
          },
          "patronus": "stag",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Daniel Radcliffe",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/harry.jpg",
          "id": 25,
          "favorite": false
        }]`;
        localStorage.setItem('characters', characters);
      }
      const charactersJson = JSON.parse(characters) as Character[];
      return new Observable((observer) => {
        observer.next(charactersJson);
      });
    }

    return this.http.get<Character[]>(this.url);
  }

}
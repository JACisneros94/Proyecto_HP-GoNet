export default interface Character {
  id: number;
  name: string;
  house: 'Gryffindor'|'Ravenclaw'|'Hufflepuff'|'Slytherin';
  alive: boolean;
  eyeColour: string;
  hairColour: string;
  image: string;
  dateOfBirth: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  gender: string;
  favorite: boolean;
};
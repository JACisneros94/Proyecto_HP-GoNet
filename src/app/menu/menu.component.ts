import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  visible = false;
  verLista = false;

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.visible = true;
  }

  toggleList() {
    this.verLista = !this.verLista; 
  }

  closeModal() {
    this.visible = false;
  }

  closeList() {
    if (this.verLista) {
      this.verLista = false;
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  visible = false;

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }

}

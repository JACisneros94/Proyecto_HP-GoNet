import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() visible = false;
  @Output() onClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.onClose.emit();
  }

}

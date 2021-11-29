import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Character from '../models/Character';
import { StateService } from '../state.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() visible = false;
  @Output() onClose = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private stateService: StateService) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      eyeColour: ['', [Validators.required]],
      hairColour: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      position: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
  }

  async submit() {
    if (!this.form.valid) {
      alert("FALTAN CAMPOS OBLIGATORIOS POR LLENAR");
      return;
    }
    
    const input: any = document.getElementById('image');
    const file = input.files[0];

    
    const character = {
      name: this.form.value.name,
      dateOfBirth: this.form.value.dateOfBirth,
      eyeColour: this.form.value.eyeColour,
      hairColour: this.form.value.hairColour,
      gender: this.form.value.gender,
      hogwartsStudent: this.form.value.position === 'student',
      hogwartsStaff: this.form.value.position === 'staff',
      image: await this.toBase64(file),
      alive: true,
    } as Character;

    this.stateService.addCharacter(character, () => {
      this.close();
    });
    
  }

  toBase64(file: any) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

  close() {
    this.onClose.emit();
  }

}

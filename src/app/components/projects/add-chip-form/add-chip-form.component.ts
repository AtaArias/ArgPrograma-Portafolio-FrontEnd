import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-chip-form',
  templateUrl: './add-chip-form.component.html',
  styleUrls: ['./add-chip-form.component.css']
})
export class AddChipFormComponent {
  @Output() addChip: EventEmitter<string> = new EventEmitter<string>;
  
  nameField: FormControl = new FormControl('Chip name');

  constructor(){

  }

  onSubmit(){
    this.addChip.emit(this.nameField.value);
  }
}

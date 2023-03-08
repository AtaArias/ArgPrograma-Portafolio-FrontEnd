import { isNgContainer } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

import { Card } from './inst-card.model';

@Component({
  selector: 'app-inst-card',
  templateUrl: './inst-card.component.html',
  styleUrls: ['./inst-card.component.css']
})
export class InstCardComponent {
  @Input() card: Card;

  @Input() edit: boolean;

  @Output() deleteCard: EventEmitter<Card> = new EventEmitter;

  @Output() saveEdits: EventEmitter<Card> = new EventEmitter;

  editSelf: boolean  = false;
  
  editForm: FormGroup;

  constructor(private fb: FormBuilder){
    
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      'title': [this.card.title, Validators.required],
      'iconUrl': [this.card.iconUrl, Validators.required],
      'content': [this.card.content]
    })
  }

  clickedDelete(){
    console.log("card eliminated" + this.card.id)
    this.deleteCard.emit(this.card);
  }

  editSelfToggle() {
    this.editSelf = !this.editSelf;

    this.editForm.setValue({title: this.card.title, iconUrl: this.card.iconUrl, content: this.card.content});
  }

  clickedSave() {
    this.card.title = this.editForm.controls['title'].value;

    this.card.iconUrl = this.editForm.controls['iconUrl'].value;

    this.card.content = this.editForm.controls['content'].value;

    this.saveEdits.emit(this.card);

    console.log("save click");

    this.editSelfToggle();
  }
  
  // add a way for the card to delete itself


}

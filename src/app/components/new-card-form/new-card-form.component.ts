import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-new-card-form',
  templateUrl: './new-card-form.component.html',
  styleUrls: ['./new-card-form.component.css']
})
export class NewCardFormComponent {

  @Input() addCard: (title: string, iconUrl: string, content: string) => void;

}

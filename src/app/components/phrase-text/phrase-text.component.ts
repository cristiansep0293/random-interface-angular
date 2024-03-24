import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phrase-text',
  templateUrl: './phrase-text.component.html',
  styleUrl: './phrase-text.component.css'
})
export class PhraseTextComponent {
  @Input()
  public newPhrase:string = '';
}

import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { getRandomNumber } from '../../util/util';
import { iPhrase } from '../../interface/iPhrase.interface';

@Component({
  selector: 'app-phrase-text',
  templateUrl: './phrase-text.component.html',
  styleUrl: './phrase-text.component.css'
})
export class PhraseTextComponent {
  @Input()
  public newPhrase:string = '';
}

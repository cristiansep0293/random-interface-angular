import { Component, EventEmitter, Output } from '@angular/core';
import { getRandomImg, getRandomNumber } from '../../util/util';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  public imgCurrent: string = '';

  @Output()
  public onNewImg: EventEmitter<string> = new EventEmitter();

  public changeImg():void {
    this.imgCurrent = getRandomImg(this.imgCurrent);
    this.onNewImg.emit(this.imgCurrent);
  }
}

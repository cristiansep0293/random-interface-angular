import { Component, EventEmitter, Output } from '@angular/core';
import { RandomInterfaceService } from '../../service/randomInterface.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  public imgCurrent: string = '';

  @Output()
  public onNewImg: EventEmitter<string> = new EventEmitter();

  constructor(private randomInterfaceService: RandomInterfaceService) {}

  public changeImg():void {
    this.imgCurrent = this.randomInterfaceService.getRandomImg(this.imgCurrent);
    this.onNewImg.emit(this.imgCurrent);
  }
}

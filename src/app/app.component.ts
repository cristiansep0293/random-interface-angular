import { Component } from '@angular/core';

import { iPhrase } from './interface/iPhrase.interface';
import { RandomInterfaceService } from './service/randomInterface.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public imgCurrent:string = '';
  public newPhrase:string = '';
  public jsonDataResult:iPhrase[] = [];

  constructor(private _randomInterfaceService: RandomInterfaceService) {
    _randomInterfaceService.getJsonDataResult().subscribe(data => {
      this.jsonDataResult = data;
      this.newPhrase = _randomInterfaceService.getRandomPhrase(this.newPhrase, this.jsonDataResult);
      this.imgCurrent = _randomInterfaceService.getRandomImg(this.imgCurrent);
    });
  }

  public onChangeInterface(img: string): void {
    this.imgCurrent = img;
    this.newPhrase = this._randomInterfaceService.getRandomPhrase(this.newPhrase, this.jsonDataResult);
  }
}

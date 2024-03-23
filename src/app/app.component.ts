import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private randomInterfaceService: RandomInterfaceService) {
    this.newPhrase = randomInterfaceService.getRandomPhrase(this.newPhrase);
      this.imgCurrent = randomInterfaceService.getRandomImg(this.imgCurrent);
  }

  public onChangeInterface(img: string): void {
    this.imgCurrent = img;
    this.newPhrase = this.randomInterfaceService.getRandomPhrase(this.newPhrase);
  }
}

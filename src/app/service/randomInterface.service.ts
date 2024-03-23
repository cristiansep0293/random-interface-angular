import { Injectable } from '@angular/core';
import { iPhrase } from '../interface/iPhrase.interface';
import { HttpClient } from '@angular/common/http';
import { getRandomNumber } from '../util/util';

@Injectable({
  providedIn: 'root'
})
export class RandomInterfaceService {
  public jsonDataResult: iPhrase[] = [];
  public imgsArray: string[] = [
    '../assets/img/imgOne.jpg',
    '../assets/img/imgTwo.jpg',
    '../assets/img/imgThree.jpg',
    '../assets/img/imgFour.jpg'
  ];

  constructor(private http: HttpClient) {
    this.http.get<iPhrase[]>('assets/json/phrases.json').subscribe((res) => {
      this.jsonDataResult = res;
    });
  }

  public getRandomPhrase = (phraseOld: string): string => {
    let newObjPhrase:iPhrase = this.jsonDataResult[getRandomNumber(this.jsonDataResult.length - 1)];
    while (newObjPhrase.phrase === phraseOld) {
      newObjPhrase = this.jsonDataResult[getRandomNumber(this.jsonDataResult.length - 1)];
    }
    return newObjPhrase.phrase;
  }

  public getRandomImg = (imgOld: string): string => {
    let newImg: string = this.imgsArray[getRandomNumber(this.imgsArray.length - 1)];
    while (newImg === imgOld) {
      newImg = this.imgsArray[getRandomNumber(this.imgsArray.length - 1)];
    }
    return newImg;
  }

}

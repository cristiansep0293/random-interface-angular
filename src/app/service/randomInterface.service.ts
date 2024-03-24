import { Injectable } from '@angular/core';
import { iPhrase } from '../interface/iPhrase.interface';
import { HttpClient } from '@angular/common/http';
import { getRandomNumber } from '../util/util';
import { Observable } from 'rxjs';
// import { listFiles } from 'list-files-in-dir';

@Injectable({
  providedIn: 'root'
})
export class RandomInterfaceService {
  // public jsonDataResult: iPhrase[] = [];
  public imgsArray: string[] = [
    '../assets/img/imgOne.jpg',
    '../assets/img/imgTwo.jpg',
    '../assets/img/imgThree.jpg',
    '../assets/img/imgFour.jpg'
  ];

  constructor(private http: HttpClient) {
    // listFiles('../assets/img')
    // .then(files => {
    //   console.log(files);
    // });
  }

  public getJsonDataResult():Observable<iPhrase[]> {
    return this.http.get<iPhrase[]>('assets/json/phrases.json');
  }

  public getRandomPhrase = (phraseOld: string, jsonDataResult:iPhrase[]): string => {
    let newObjPhrase:iPhrase = jsonDataResult[getRandomNumber(jsonDataResult.length - 1)];
    while (newObjPhrase.phrase === phraseOld) {
      newObjPhrase = jsonDataResult[getRandomNumber(jsonDataResult.length - 1)];
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

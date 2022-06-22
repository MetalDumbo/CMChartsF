import {Injectable, OnInit} from '@angular/core';
// import the Json-File as "rawData"
import rawData from 'src/assets/rawdata.json';
@Injectable({
  providedIn: 'root'
})
export class JsonHandlerService implements OnInit {

  constructor() {
    this.rawDataDict = rawData;
  }

  private rawDataDict: {}

  ngOnInit(): void {}

  public getRawDataDict(): {} {
    return this.rawDataDict;
  }

}

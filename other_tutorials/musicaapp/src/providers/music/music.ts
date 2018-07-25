import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/json'
import { HttpModule} from "@angular/http";

/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API: string = "http://orangevalleycaa.org/api/music";

@Injectable()
export class MusicProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MusicProvider Provider');
  }

  getMusic()
  {
    return this.http.get(API)
      // .map(response => response.json());
      .map(response => response);

  }

  getOneSong()
  {
    let oneSongUrl = API + "/qty/1";
    return this.http.get(oneSongUrl)
      .map(response => response);
  }

}

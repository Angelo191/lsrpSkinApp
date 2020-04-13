import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkinService {

  constructor(private httpClient: HttpClient) { }

  getAllSkins() : Observable<any> {
    return this.httpClient.get('https://beta.ls-rp.com/api/skin/list-all');
  }

}
/*

.subscribe(
      (data: any) => {

      },
      err => {
        console.log(err);
      }
    );
*/
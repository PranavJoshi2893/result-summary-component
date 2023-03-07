import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Marks } from './model/marks';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  private _url:string="./assets/data/data.json"
  constructor(private _http:HttpClient) { }

  getData():Observable<Marks[]>{
    return this._http.get<Marks[]>(this._url);
  }
}

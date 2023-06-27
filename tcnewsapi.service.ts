import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http:HttpClient) { }

  //top Headlines API URL
  topHeadlinesNews='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5a554c8ba062455cb52a041542e42a32';
  //tech News API URL
  techNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=5a554c8ba062455cb52a041542e42a32';
   //Business news API URL
   businessNews='https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=5a554c8ba062455cb52a041542e42a32'

  

  tcHeadlines():Observable<any>{
    return this._http.get(this.topHeadlinesNews)
  }

//For Business Logic
tcBuzzNews():Observable<any>{
  return this._http.get(this.businessNews)
}

//use tech Methods

tcTechNews():Observable<any>{
  return this._http.get(this.techNews)
}

}

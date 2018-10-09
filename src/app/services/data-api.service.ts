import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable'
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http:HttpClient) { }

  //extraemos datos de la Api
  getImgs(){
    const urlApi= 'https://api.unsplash.com/search/photos?query=dog&client_id=1b09a891067cc7cef93d3161bfa754b0bac778388c2d19065091a74d0093ca4c';
    return this.http.get(urlApi);
  }
}

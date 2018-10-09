import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private query: string;
  private APIKEY: string = environment.accesKey_unplash;
  private URLAPI: string= environment.endPoint_urlApiUnplash;
  private URL: string=this.URLAPI+this.query+this.APIKEY

  constructor(private http:HttpClient) { }

  //extraemos datos de la Api
  getImgs(query){
    //const urlApi= 'https://api.unsplash.com/search/photos?query=dog&client_id=1b09a891067cc7cef93d3161bfa754b0bac778388c2d19065091a74d0093ca4c';
    const urlApi= this.URLAPI+query+'&client_id='+this.APIKEY;
    return this.http.get(urlApi);
  }
}

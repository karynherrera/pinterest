import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable'
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private query: string;
  private APIKEY = environment.accesKey_unplash;
  private URLAPI = environment.endPoint_urlApiUnplash;
  private url = '&client_id='+ this.APIKEY;
  pics: Observable<any>;
  pic: Observable<any>;

  constructor(private http:HttpClient) { }

  //extraemos datos de la Api
  getImgs(query: string){
    //const urlApi= 'https://api.unsplash.com/search/photos?query=dog&client_id=1b09a891067cc7cef93d3161bfa754b0bac778388c2d19065091a74d0093ca4c';
    const urlApi= this.URLAPI + query + this.url;
    //this.pic = this.http.get(urlApi)
    /*
    this.pic.pipe(map(res => {
      console.log('res');
      console.log(res);
    })); */
    return this.http.get(urlApi)
    //.pipe(map(res => res.json()))
    
  }
}

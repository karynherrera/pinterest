import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private query: string;
  private APIKEY = environment.accesKey_unplash;
  private URLAPI = environment.endPoint_urlApiUnplash;
  private url = '&client_id='+ this.APIKEY;
  
  dataApiImgs=[];
  resultsApi=[];
  getPins=[];
  pines=[];
  getTgs=[];
  tags=[];

  constructor(private http:HttpClient) { }

  //extraemos datos de la Api
  getImgs(query: string){
    let array: any[];
    let i=0;
    //const urlApi= 'https://api.unsplash.com/search/photos?query=dog&client_id=1b09a891067cc7cef93d3161bfa754b0bac778388c2d19065091a74d0093ca4c';
    const urlApi= this.URLAPI + query + this.url;
    this.http.get(urlApi).subscribe((data:any[])=> {
      //console.log(data);
      this.dataApiImgs.push(data);
      //console.log(this.dataApiImgs);
      this.dataApiImgs.forEach((element)=>{
        this.resultsApi = element.results;
        //console.log(this.resultsApi);
        
        this.resultsApi.forEach((pin)=>{
          //console.log(pin);
          this.getPins.push({
            'id':pin.id,
            'img':pin.urls.small,
            'description': pin.description,
          })
          if(this.tags.length>10){
            this.tags=[];
          }
          else{
            pin.tags.forEach(element => {
              i++;
              if(i<=10){
                this.tags.push({
                  'tags':element.title,
                })
              }
              //console.log(element.title);
              
            });
          }
          
          
         // this.pins.id = pin.id;
         // this.pins.img= pin.links.download;
         // this.pins.description=pin.description;
        })
      })
      
    });
    /*.subscribe((data:any[])=> {
      //console.log(data);
      this.dataApiImgs.push(data);
      //console.log(this.dataApiImgs);
      this.dataApiImgs.forEach((element)=>{
        this.resultsApi = element.results;
        //console.log(this.resultsApi);
        this.resultsApi.forEach((pin)=>{
          console.log(pin);
        })
      })
    });
    */
   //console.log(this.getPins);
   this.getTgs = this.tags;
   //console.log('dentro de getimg tgs');
   //console.log(this.getTgs);
   //console.log('dentro de getimg tags');
   //console.log(this.tags);
   return this.pines = this.getPins;
  }
  getTags(){
    console.log('dentro de gettags ');
    console.log(this.getTgs);
    return this.tags;
  }
  clear(){
    this.dataApiImgs=[];
    this.resultsApi=[];
    this.getPins=[];
    this.pines=[];
    this.getTgs=[];
    this.tags=[];
  }

 
}

import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  img:string;
  total:any;

  description:string;
  pins=[];
  dataApiImgs=[];
  resultsApi=[];
  query='parakeet';
  constructor(private dataApi:DataApiService) { }

  ngOnInit() {
    this.getImgsApi(this.query);
  }

  getImgsApi(query){
   this.pins =this.dataApi.getImgs(query)
    /*.subscribe((data:any[])=> {
      //console.log(data);
      this.dataApiImgs.push(data);
      //console.log(this.dataApiImgs);
      this.dataApiImgs.forEach((element)=>{
        this.resultsApi = element.results;
        //console.log(this.resultsApi);
        
        this.resultsApi.forEach((pin)=>{
          //console.log(pin);
          this.pins.push({
            'id':pin.id,
            'img':pin.links.download,
            'description': pin.description,
          })
        
         // this.pins.id = pin.id;
         // this.pins.img= pin.links.download;
         // this.pins.description=pin.description;
        })
      })
    }); */
    //console.log(this.pins);
  }
}

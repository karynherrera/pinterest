import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ImgInterface } from '../../model/imgInterface';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  img:string;
  total:any;
  description:string;
  pins: ImgInterface= {
    id:'',
    description: '',
    img:'',
  };
  array: any[];
  dataApiImgs=[];
  resultsApi=[];

  constructor(private dataApi:DataApiService) { }

  ngOnInit() {
    this.getImgsApi();
  }

  getImgsApi(){
    this.dataApi.getImgs('cats').subscribe((data:any[])=> {
      //console.log(data);
      this.dataApiImgs.push(data);
      //console.log(this.dataApiImgs);
      this.dataApiImgs.forEach((element)=>{
        this.resultsApi = element.results;
        //console.log(this.resultsApi);
        this.resultsApi.forEach((pin)=>{
          console.log(pin);
          this.pins.id = pin.id;
          this.pins.img= pin.links.download;
          this.pins.description=pin.description;
        })
      })
    });
    /*
      this.dataApi.getImgs('cats').subscribe(imgs=>{
      console.log(imgs);
      this.array = imgs.results;
      this.total = imgs.results[0].links.download;
      console.log(this.total);
      this.pins.img = this.total;
      this.pins.description = imgs.results[0].description;
    } ); 
    */
  }
}

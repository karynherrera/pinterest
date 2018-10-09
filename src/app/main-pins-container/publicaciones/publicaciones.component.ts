import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  img:string;
  total:any;
  description:string;


  constructor(private dataApi:DataApiService) { }

  ngOnInit() {
    this.getImgsApi();
  }

  getImgsApi(){  
    
    this.dataApi.getImgs('cat').subscribe(imgs=>{
      console.log(imgs);
      this.total = imgs.results[0].links.download;
      console.log(this.total);
      this.img = this.total;
      this.description = imgs.results[0].description;
    } );
  }
}

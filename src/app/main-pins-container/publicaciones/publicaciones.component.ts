import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor(private dataApi:DataApiService) { }

  ngOnInit() {
    this.getImgsApi();
  }

  getImgsApi(){
    this.dataApi.getImgs('cat').subscribe((imgs)=>console.log(imgs));
  }

}

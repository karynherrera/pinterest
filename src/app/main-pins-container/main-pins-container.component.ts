import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';

@Component({
  selector: 'app-main-pins-container',
  templateUrl: './main-pins-container.component.html',
  styleUrls: ['./main-pins-container.component.css']
})
export class MainPinsContainerComponent implements OnInit {
pines=[];

  constructor(private picService:DataApiService) { }

  ngOnInit() {

  }
  sendQuery(query){

  }
}

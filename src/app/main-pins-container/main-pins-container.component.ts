import { Component, OnInit } from '@angular/core';
import { ImgInterface } from '../model/imgInterface';
import { DataApiService } from '../services/data-api.service';

@Component({
  selector: 'app-main-pins-container',
  templateUrl: './main-pins-container.component.html',
  styleUrls: ['./main-pins-container.component.css']
})
export class MainPinsContainerComponent implements OnInit {
pines: ImgInterface[];
  constructor(private picService:DataApiService) { }

  ngOnInit() {
  }

}

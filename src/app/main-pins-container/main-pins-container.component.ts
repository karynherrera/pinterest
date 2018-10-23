import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { DataApiService } from '../services/data-api.service';

@Component({
  selector: 'app-main-pins-container',
  templateUrl: './main-pins-container.component.html',
  styleUrls: ['./main-pins-container.component.css']
})
export class MainPinsContainerComponent implements OnInit {
  @Output() queryFind: EventEmitter<any> = new EventEmitter<any>(); 
pines=[];

  constructor(private picService:DataApiService) { }

  ngOnInit() {

  }
  sendQuery(query){

  }
  public saveQuery(query: string): void { 
    this.queryFind.emit(query); 
  } 
}

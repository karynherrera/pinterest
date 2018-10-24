import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
cont: Boolean=false;
@Output() onTagChoose: EventEmitter<any> = new EventEmitter<any>(); 
query='';
tags=[];
pinesData=[];
array=[];
@Input() inputTag;
  constructor(private dataApi:DataApiService) {

   }

  ngOnInit() {
    //this.pinesData = this.dataApi.getImgs('trading')
    this.tags = this.dataApi.getTags();
    //console.log(this.tags);
    console.log(this.tags);
  }

  clickBtn(tag){
    
    this.onTagChoose.emit(tag); 
    
    this.pinesData = this.dataApi.getImgs(tag);
    this.tags = this.dataApi.getTags();
  }

  public saveTag(choosenTag: string): void { 
    this.onTagChoose.emit(choosenTag); 
  } 

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    
    if(changes.inputTag.firstChange===false){
      this.query = changes.inputTag.currentValue;
      
      this.pinesData = this.dataApi.getImgs(this.query);
      this.tags = this.dataApi.getTags();

      //console.log('this query '+this.query);
      //this.dataApi.clear();
      //this.getImgsApi(this.query);
    } 
    //console.log(changes.data.currentValue);
    console.log(this.tags);
  }
}

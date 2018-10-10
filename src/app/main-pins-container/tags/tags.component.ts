import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
cont: Boolean=false;

tags=[];
pinesData=[];
array=[];

  constructor(private dataApi:DataApiService) {

   }

  ngOnInit() {
    this.pinesData = this.dataApi.getImgs('trading')
    this.tags = this.dataApi.getTags();
    
    //console.log(this.tags);
    console.log(this.tags);
  }

}

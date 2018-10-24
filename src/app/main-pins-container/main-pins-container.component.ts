import { Component, OnInit} from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-main-pins-container',
  templateUrl: './main-pins-container.component.html',
  styleUrls: ['./main-pins-container.component.css']
})
export class MainPinsContainerComponent implements OnInit {

public inputToSearch: String;
public inputToTag: String;
pines=[];
queryForm: FormGroup;
onTagChoose;

  constructor(private formBuilder: FormBuilder,private picService:DataApiService) { 
    this.createForm(); 
  }

  ngOnInit() {
  }

  createForm(){
    this.queryForm = this.formBuilder.group({
      query: ['']
    })
  }

  public saveQuery(querys: FormGroup): void { 
    let query = this.queryForm.value.query;
    //console.log(query);
    this.inputToSearch = query;
    this.queryForm.reset();
  } 

  public clickBtn(choosenTag: string):void { 
    //console.log('Tag: ', choosenTag); 
    this.inputToTag = choosenTag;
    //console.log(this.inputToTag);
    this.inputToSearch = choosenTag;
    this.queryForm.reset();
  }
}

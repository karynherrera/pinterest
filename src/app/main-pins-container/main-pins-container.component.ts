import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-pins-container',
  templateUrl: './main-pins-container.component.html',
  styleUrls: ['./main-pins-container.component.css']
})
export class MainPinsContainerComponent implements OnInit {
  @Output() queryFind: EventEmitter<any> = new EventEmitter<any>(); 

public inputToChild: String;
pines=[];
queryForm: FormGroup;

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

  sendQuery(query){

  }
  public saveQuery(querys: FormGroup): void { 
    let query = this.queryForm.value.query;
    console.log(query);
    this.inputToChild = query;
    this.queryForm.reset();
  } 
}

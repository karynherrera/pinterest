import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { DataApiService } from '../../services/data-api.service';
import {MatDialog, MatDialogModule} from '@angular/material';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  img:string;
  total:any;
  
  description:string;
  pins=[];
  dataApiImgs=[];
  resultsApi=[];
  query='every';
  tags=[];
  name;
  animal;
  constructor(private formBuilder: FormBuilder, private dataApi:DataApiService, public matDialog: MatDialogModule, public dialog: MatDialog) { }
  @Input() data;


  ngOnInit() {
    this.getImgsApi(this.query);
    //console.log(this.tags);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('envio');
    if(changes.data.firstChange===false){
      this.query = changes.data.currentValue;
      console.log('this query '+this.query);
      this.dataApi.clear();
      this.getImgsApi(this.query);
    }
    //console.log(changes.data.currentValue);
    
  }

  getImgsApi(query){
   this.pins =this.dataApi.getImgs(query)
    /*.subscribe((data:any[])=> {
      //console.log(data);
      this.dataApiImgs.push(data);
      //console.log(this.dataApiImgs);
      this.dataApiImgs.forEach((element)=>{
        this.resultsApi = element.results;
        //console.log(this.resultsApi);
        
        this.resultsApi.forEach((pin)=>{
          //console.log(pin);
          this.pins.push({
            'id':pin.id,
            'img':pin.links.download,
            'description': pin.description,
          })
        
         // this.pins.id = pin.id;
         // this.pins.img= pin.links.download;
         // this.pins.description=pin.description;
        })
      })
    }); */
    //console.log(this.pins);
  }

  

  openModal(id) {
    let refPins=[];
    this.pins.forEach((element)=>{
        if(element.id === id){
          console.log(element);
          let dialogRef = this.dialog.open(ModalComponent, {
            height: '500px',
            width: '600px', 
            data: { 
               img: element.img,
               description:element.description},
            //urlPhoto: 'hola'
          });
      
          dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
          });
          
        }
    })
    
}
}

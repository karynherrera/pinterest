import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPinsContainerComponent } from './main-pins-container/main-pins-container.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { TagsComponent } from './tags/tags.component';

//Importaciones Material Angular
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    MainPinsContainerComponent,
    PublicacionesComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

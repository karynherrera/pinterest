import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPinsContainerComponent } from './main-pins-container/main-pins-container.component';
import { PublicacionesComponent } from './main-pins-container/publicaciones/publicaciones.component';
import { TagsComponent } from './main-pins-container/tags/tags.component';

//Importaciones Material Angular
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

//servicio
import { DataApiService } from './services/data-api.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MainPinsContainerComponent,
    PublicacionesComponent,
    TagsComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
    
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

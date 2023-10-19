import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdressComponent } from './adress/adress.component';
import { LoaderComponent } from './loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AdressComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
  ],
  exports:[AdressComponent,LoaderComponent]
})
export class SharedModule { }

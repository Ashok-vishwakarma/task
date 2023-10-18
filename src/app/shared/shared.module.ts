import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdressComponent } from './adress/adress.component';



@NgModule({
  declarations: [
    AdressComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[AdressComponent]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { MultitaskdropComponent } from './multitaskdrop/multitaskdrop.component';
import { DateComponent } from './date/date.component';

import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';

import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ParentComponent } from './parent/parent.component';
import { SharedModule } from "../shared/shared.module";



const routes: Routes = [
  
  {
    path: '',
    component: DropdownComponent
  },

  {
    path: 'date',
    component: DateComponent
  },

  {
    path: "fileupload",
    component: FileuploadComponent
  },

  {
    path: "multitasking",
    component: MultitaskdropComponent
  },

  {
    path:"lifecycle",
    component:LifecycleComponent
  },
  {
    path:'parent',
    component:ParentComponent
  },
]

@NgModule({
    declarations: [
        DropdownComponent,
        FileuploadComponent,
        MultitaskdropComponent,
        DateComponent,
        LifecycleComponent,
        ParentComponent,
    ],
    imports: [
        MatChipsModule,
        NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule,
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
        MatDatepickerModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class PagesModule { }

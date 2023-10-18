import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




const routes: Routes = [
  {
    path: '', component: AuthComponent,

    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path:'login',
        component:LoginComponent,
      },

    ]

  }

];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }

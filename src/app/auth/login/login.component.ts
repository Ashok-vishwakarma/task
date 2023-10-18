import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:any

  constructor(private router:Router , private fb:FormBuilder){}
  ngOnInit(): void {
   
  this.login=this.fb.group({
    'name': ['', Validators.required],
    'Username': ["",Validators.required],
    'pancard': [ "",Validators.compose([Validators.pattern("[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$")]),],
    'aadharcard': ["",Validators.required,],
    'number': ["",Validators.required],
  })


  }

  submitdetail(){
    console.log(this.login.value)
  }

  onsubmit(){
    this.router.navigate(['/pages'])
  }

}

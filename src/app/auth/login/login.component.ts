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
  login: any;
  displayCustomErrorMessage: boolean = false;

  constructor(private router: Router, private fb: FormBuilder) { }
  ngOnInit(): void {

    this.login = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      Username: ['', Validators.compose([Validators.required])],
      pancard: ['',Validators.compose([Validators.required,Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]$/)])],
      aadharcard: ['', Validators.compose([Validators.required,Validators.pattern(/^\d{12}$/)])],
      number: ['', Validators.compose([Validators.required,Validators.pattern(/^\d{10}$/)])],
    })


  }

  // submitdetail() {
  //   console.log(this.login.value)
  // }

  // onsubmit() {
  //   this.router.navigate(['/pages'])
  // }


  submitdetail() {
  }
  displayAadhaarErrorMessage() {
    if (this.login.get('aadharcard').invalid) {
      
      this.displayCustomErrorMessage = true;
    } else {
      this.displayCustomErrorMessage = false;
    }
    
  }


  onsubmit() {
    
    console.log(this.login.value);
    this.router.navigate(['/pages']);
  }
}

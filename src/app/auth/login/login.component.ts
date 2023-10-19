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
      pancard: ['', Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]{5}[0-9]{4}[A-Za-z]$/)])],
      aadharcard: ['', Validators.compose([Validators.required, Validators.pattern(/^\d{12}$/)])],
      number: ['', Validators.compose([Validators.required, Validators.pattern(/^\d{10}$/)])],
    })


  }

  
 
  aplhabetsOnly(event: any) {                                                 //it will accept only character
    let text = event.target as HTMLInputElement;
    let value = text.value.replace(/[^A-Za-z]/g, '');
    text.value = value
    return text.value
  }


  // displayAadhaarErrorMessage() {
  //   if (this.login.get('aadharcard').invalid) {

  //     this.displayCustomErrorMessage = true;
  //   } else {
  //     this.displayCustomErrorMessage = false;
  //   }

  // }

  panOnly(event:any){
    let text = event.target as HTMLInputElement;
    text.value=text.value.toUpperCase();
    // let value = text.value.replace(/[^A-Za-z]{5}[0-9]{4}[A-Za-z]$/g, '')
    // text.value = value
    return text.value
  }


  aadharOnly(event:any){
    let text = event.target as HTMLInputElement;
    let value = text.value.replace(/[^0-9]/g, '');
    text.value = value
    return text.value
  }




  onsubmit() {
    console.log(this.login.value);
    this.router.navigate(['/pages']);
  }
}

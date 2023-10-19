import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { ThemePalette } from '@angular/material/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  constructor() { }
  selecteddatee:any

  @ViewChild('picker') picker: any;

  public date!: any;
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  minDate: any;
  maxDate: any;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';
  optionss:any;
  endDate:any;
  


  ngOnInit(): void {
    
    this.minDate = new Date()
    console.log(this.minDate + "min");


    let date = new Date()
    this.maxDate = new Date(date.setDate(date.getDate() + 4));
    console.log(this.maxDate)
  
    

  }

  public formGroup = new FormGroup({
    date: new FormControl(null, [Validators.required]),
    date2: new FormControl(null, [Validators.required])
  })
  public dateControl = new FormControl(new Date());


  public options = [
    { value: true, label: 'True' },
    { value: false, label: 'False' }
  ];

  public listColors = ['primary', 'accent', 'warn'];

  public stepHours = [1, 2, 3, 4, 5];
  public stepMinutes = [1, 5, 10, 15, 20, 25];
  public stepSeconds = [1, 5, 10, 15, 20, 25];


  selecteddate() {
    this.selecteddatee = this.dateControl.value;
    console.log(this.selecteddatee)

  }





}

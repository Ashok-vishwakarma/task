import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AdressComponent } from 'src/app/shared/adress/adress.component';
import { DetailsModel } from 'src/app/shared/models/details.model';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit , OnChanges , DoCheck , AfterContentInit , AfterContentChecked{
 
  @ContentChild(AdressComponent) anyyname!:AdressComponent;
  @Input() data:number | undefined
  @Input() details!:DetailsModel 
  
  viewchecked:number=0;

  constructor(){
    console.log("constructor is working")
  }

  afterviewchecked(){
    this.viewchecked+=1
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.data+ "  ngOnChanges is working")
  }

  ngOnInit() {
    console.log(this.data+"  ngOnInit is working ")
  }

  ngDoCheck(){
    console.log(this.details+ "  docheck is working")
  }

  ngAfterContentInit(): void {
    console.log(this.anyyname?.adress+ "  aftercontentinit is working")
  }

  ngAfterContentChecked(): void {
    console.log(this.anyyname?.adress +"  ngAfterContentChecked is working")
  }

}

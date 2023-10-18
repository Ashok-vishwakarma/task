import { AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DetailsModel } from 'src/app/shared/models/details.model';
import { LifecycleComponent } from '../lifecycle/lifecycle.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked , OnDestroy {
  
 



  @ViewChild('reff') reffbutton!: ElementRef       //afterviewinit
  @ViewChild(LifecycleComponent) lifecycle!: LifecycleComponent   //ngAfterViewChecked

  count: number = 0
  object: DetailsModel = { id: 0, name: "ashok" }
  adre: any = 'India'

  value: number = 0
  setinterval:any

  ngOnInit() {

    console.log(this.count + "   ngOnInit is working")
    this.obseravleData()
  }

  counter() {
    this.count += 1;
    this.object.id += 1;
    this.adre += 1;
  }


  obseravleData() {
    this.setinterval=setInterval(() => {
      this.value ++
      console.log(this.value)
    }, 1000)
  }


  ngOnChanges(changes: SimpleChanges): void {

  }

  ngAfterViewInit() {
    this.reffbutton.nativeElement.innerHTML = 'BUTTON CHANGED'
    console.log(this.reffbutton + '  afterviewinit')
  }


  ngAfterViewChecked() {
    console.log(this.lifecycle.viewchecked + ' viewchecked working')
  }

  ngOnDestroy(){
    clearInterval(this.setinterval)
  }


}

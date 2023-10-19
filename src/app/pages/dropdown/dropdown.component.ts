import { Component } from '@angular/core';
import { LoaderserviceService } from 'src/app/shared/loaderservice.service';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
    
  constructor(public service:LoaderserviceService){}


  submit(){
    this.service.todos().subscribe((res)=>{
      console.log(res)
    })
  }

  photos(){
    this.service.photos().subscribe((res)=>{
      console.log(res)
    })
  }

  getLeaderBoardList(){
    this.service.getLeaderBoardList().subscribe((res)=>{
      console.log(res)
    })
  }

}

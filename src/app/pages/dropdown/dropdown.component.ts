import { Component, OnInit } from '@angular/core';
import { LoaderserviceService } from 'src/app/shared/loaderservice.service';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
    
  constructor(public service:LoaderserviceService){}
  ngOnInit(){
    console.log(document.head)
    console.log(document.childNodes)
    console.log(document.firstChild)
    console.log(document.lastModified)
    console.log(document.lastElementChild)
    const aa= new Array
    console.log(aa)
  }


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

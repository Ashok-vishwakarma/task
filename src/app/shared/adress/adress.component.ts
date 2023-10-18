import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.scss']
})
export class AdressComponent {
  @Input() adress!:string

}

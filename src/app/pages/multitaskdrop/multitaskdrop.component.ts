import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';




@Component({
  selector: 'app-multitaskdrop',
  templateUrl: './multitaskdrop.component.html',
  styleUrls: ['./multitaskdrop.component.scss']
})
export class MultitaskdropComponent implements OnInit {
  itemList: any = [];
  selectedItems: any = [];
  settings = {};

  constructor() { }

  ngOnInit(): void {}



  providers = new FormControl();
  allProviders: any[] = [{ PROV: "apple" }, { PROV: "mango" }, { PROV: "kiwi" }, { PROV: "banana" }];
  filteredProviders: any[] = this.allProviders;

  onInputChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredProviders = this.allProviders.filter(({ PROV }) => {
      const prov = PROV.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  onOpenChange(searchInput: any) {
    searchInput.value = "";
    this.filteredProviders = this.allProviders;

  }

  topicArray: any = []


  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];



  topic(topping: any) {
    console.log(topping)
    this.topicArray.push(topping)
    console.log(this.topicArray)
  }


  remove(i: any) {
    this.topicArray.splice(i, 1)
  }
}


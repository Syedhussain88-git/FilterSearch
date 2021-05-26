import { Component } from '@angular/core';
import { dataMain } from './constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstProject';
  filterOption: string = 'all';
  searchValue: string = '';
  items = dataMain;
  filteredItems = [];
  selectedItem: string = 'all';

  constructor() {
    this.updateResults();
  }

  async updateResults() {
    this.filteredItems = this.filterByOption(this.searchByValue(this.items));
  }

  searchByValue(items) {
    return items.filter(item => {
      if (this.searchValue.trim() === '') {
        return true;
      } else {
        return item.project.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase()) || item.type.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase());
      }
    })
  }

  filterByOption(items) {
    return items.filter(item => {
      if (this.filterOption === 'all' || this.filterOption === item.type) {
        return true;
      } 
    })
  }

  myUpdt(mydt){
    this.selectedItem = mydt;
    this.filteredItems = this.items.filter(item => {
       if (mydt === 'all' || mydt === item.type) {
         return true;
       }
     });
 }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  productsList: [] = [];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.apiService.getProducts().subscribe((data) => {
      this.productsList = data['products'];
      console.log(this.productsList);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.productsList['name'].filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}

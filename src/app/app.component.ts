import { Component, Output } from '@angular/core';
import { ApiService } from './shared/api.service';
import { Product } from './shared/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-app';
  //productsList: [] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    /*this.apiService.getProducts().subscribe((data) => {
      this.productsList = data['products'];
      console.log(this.productsList);
    });*/

  }
}

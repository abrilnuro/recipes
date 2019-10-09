import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    API_KEY = 'a401f8ee54msh6839465d185081cp199422jsn1a972625eac2';
    url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?query=coca';

    constructor(private httpClient: HttpClient) { }

    public getProducts() {
        const headers = new HttpHeaders({
            'x-rapidapi-key': this.API_KEY
        });

        const options = { headers };

        return this.httpClient.get(this.url, options);
    }

}

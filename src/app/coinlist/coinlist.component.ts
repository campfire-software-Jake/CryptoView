import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-coinlist',
  templateUrl: './coinlist.component.html',
  styleUrls: ['./coinlist.component.css']
})
export class CoinlistComponent {

  private apiUrl = 'https://api.coinmarketcap.com/v1/ticker/?limit=50';
  data: any = [];

  constructor(private http: Http) {
    this.getPrice();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl).map((res: Response) => res.json())
  }

  getPrice() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

  sortByPrice(sorts) {
    for (let value in sorts) {
      switch (value) {
        case "price":
          return this.sortCoins("price_usd", sorts[value])

      }
    }


  }

  sortCoins(propName, algo) {
    this.data.sort((a, b) => {
      const aSortable = parseFloat(a[propName])
      const bSortable = parseFloat(b[propName])

      if (algo === "asc") {
        return (aSortable < bSortable) ? -1 : (aSortable > bSortable) ? 1 : 0;
      } else if (algo === "desc") {
        return (aSortable < bSortable) ? 1 : (aSortable > bSortable) ? -1 : 0;
      }
    })
  }
}

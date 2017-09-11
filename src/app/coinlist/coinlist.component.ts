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
  shown: any;

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

  sortByVolume(sorts) {
    for (let value in sorts) {
      switch (value) {
        case "volume":
          return this.sortCoins("24h_volume_usd", sorts[value])
      }
    }
  }

  sortByPercentChange24h(sorts) {
    for (let value in sorts) {
      switch (value) {
        case "percentChange24h":
          return this.sortCoins("percent_change_24h", sorts[value])
      }
    }
  }

  sortByPercentChange7d(sorts) {
    for (let value in sorts) {
      switch (value) {
        case "percentChange7d":
          return this.sortCoins("percent_change_7d", sorts[value])
      }
    }
  }

  sortByPercentChange1h(sorts) {
    for (let value in sorts) {
      switch (value) {
        case "percentChange1h":
          return this.sortCoins("percent_change_1h", sorts[value])
      }
    }
  }

  sortByMarketCap(sorts) {
    for (let value in sorts) {
      switch (value) {
        case "marketcap":
          return this.sortCoins("market_cap_usd", sorts[value])
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

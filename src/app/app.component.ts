import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// @Pipe({name: 'keys' })
// export class KeysPipe implements PipeTransform {
//   transform(value, args:string[]) : any {
//     let keys = [];
//     for (let key in value) {
//       keys.push(key);
//     }
//     return keys;
//   }
// }

export class AppComponent {
  title = 'app';
  
  
}

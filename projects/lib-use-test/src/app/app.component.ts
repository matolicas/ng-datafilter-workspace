import { Component } from '@angular/core';

import { JiiFilter } from 'ng-datafilter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lib-use-test';

  filter: string = JSON.stringify(JiiFilter.build(['name', 'description'], 'contains', 'anan'));

}

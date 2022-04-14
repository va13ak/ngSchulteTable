import { Component } from '@angular/core';
import {CounterService} from "./shared/counter.service";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngSchulte Table';
  tableWidth: string = environment.tableWidth;
  constructor(public gService: CounterService) {
  }
}

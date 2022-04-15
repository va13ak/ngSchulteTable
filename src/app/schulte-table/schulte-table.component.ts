import { Component, OnInit } from '@angular/core';
import {CounterService} from "../shared/counter.service";
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-schulte-table',
  templateUrl: './schulte-table.component.html',
  styleUrls: ['./schulte-table.component.scss']
})
export class SchulteTableComponent implements OnInit {
  tableWidth: string = environment.tableWidth;
  tableHeight: string = environment.tableHeight;
  statusBarHeight: string = environment.statusBarHeight;

  constructor(public gService: CounterService) {
  }

  ngOnInit(): void {
  }

  onClick() {
    if (this.gService.isStarted()) {
      this.gService.stop();
    } else {
      this.gService.start();
    }
  }
}

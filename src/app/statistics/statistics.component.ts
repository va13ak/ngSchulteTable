import { Component, OnInit } from '@angular/core';
import {CounterService} from "../shared/counter.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(public gService: CounterService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.gService.start();
  }
}

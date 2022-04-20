import { Component, OnInit } from '@angular/core';
import { CounterService } from "../shared/counter.service";

@Component({
  selector: 'app-schulte-table',
  templateUrl: './schulte-table.component.html',
  styleUrls: ['./schulte-table.component.scss']
})
export class SchulteTableComponent implements OnInit {

  constructor(public gService: CounterService) {
  }

  ngOnInit(): void {
  }
}

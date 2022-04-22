import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stat-element',
  templateUrl: './stat-element.component.html',
  styleUrls: ['./stat-element.component.scss']
})
export class StatElementComponent implements OnInit {
  @Input() title: string = '';
  @Input() value: any;

  constructor() { }

  ngOnInit(): void {
  }

}

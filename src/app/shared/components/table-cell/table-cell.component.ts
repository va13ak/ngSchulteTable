import {Component, Input, OnInit} from '@angular/core';
import {TableCell} from "../../interfaces";
import {CounterService} from "../../counter.service";

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss']
})
export class TableCellComponent implements OnInit {
  @Input() cell!: TableCell

  constructor(public gService: CounterService) { }

  ngOnInit(): void {
  }

  onClick($event: any) {
    $event.stopPropagation();

    if (this.gService.isStarted()) {
      if (this.gService.setChecked(this.cell)) {
        window.navigator.vibrate(100);
      }
    } else {
      this.gService.start();
    }
  }
}

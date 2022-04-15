import { Component, OnInit } from '@angular/core';
import { CounterService } from "../shared/counter.service";
import {DatePipe} from "@angular/common";
import { environment } from "../../environments/environment";

// https://www.angularjswiki.com/angular/how-to-use-angular-pipes-in-components-and-services/

@Component({
  selector: 'app-estatistics',
  templateUrl: './e-statistics.component.html',
  styleUrls: ['./e-statistics.component.scss']
})
export class EStatisticsComponent implements OnInit {
  options: any;

  tableWidth: string = environment.tableWidth;
  tableHeight: string = environment.tableHeight;
  statusBarHeight: string = environment.statusBarHeight;

  data: any[] = [];
  dateList = this.data.map((item) => item.name);
  valueList = this.data.map((item) => item.value);

  constructor(
    public gService: CounterService,
    private datePipe: DatePipe
  ) {
    this.data = gService.chartData[0].series;
    // console.log('data: ', this.data);
    // console.log('dateList', this.dateList);
    // console.log('valueList', this.valueList);
  }

  ngOnInit(): void {
    this.options = {
      xAxis: {
        type: 'category',
        //type: 'time', // https://github.com/apache/echarts/issues/13073
        axisLabel: {
          show: false,
          axisLine: {
            onZero: false
          },
          position: 'bottom'
        },
        data: this.data.map((item) => new Date(item.name)), // no need if type 'time'
        axisTick: {
          show: false
        }
      },
      yAxis: {
        inverse: true,
        scale: true,
        name: 'time, s',
        nameLocation: 'center',
        nameTextStyle: {
          padding: [0, 0, 15, 0],
          fontSize: 16
        }
      },
      series: [{
        type: 'line',
        //data: this.data.map((item) => [new Date(item.name).getTime(), item.value]), // by time
        data: this.data.map((item) => item.value)
      }],
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          let date = new Date(params[0].axisValue);
          let labelFormat = 'MMM d, '
              + ((date.getFullYear() === new Date().getFullYear()) ?  '' : 'y, ')
              + 'HH:mm';
          return '<center><b>'
            + params[0].value
            + '</b><br /><small>'
            + this.datePipe.transform(date, labelFormat)
            + '</small></center>';
        } //'{c}<br />{b}'
      },
      legend: {
        show: false
      },
      grid: {
        //left: '45px',
        //top: '10px',
        right: 0,
        //bottom: '10px'
      }
    }
  }

  onClick() {
    this.gService.start();
  }

  getUsersLocale(defaultValue: string): string {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
      return defaultValue;
    }
    const wn = window.navigator as any;
    let lang = wn.languages ? wn.languages[0] : defaultValue;
    lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;
    return lang;
  }
}

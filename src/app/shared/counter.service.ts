import { Injectable } from "@angular/core";
import { TableCell } from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  tableCells: TableCell[] = [];
  width: number = 5;
  height: number = 5;
  size: number = this.width * this.height;
  private current: number = 0;
  private started: boolean = false;
  private numbers: number[] = [];
  private bestTime = 0.0;
  private lastResult = 0.0;
  private storageKey = 'ngSchulte.';
  private totalTime = 0.0;
  private gamesNum = 0;

  time: number = 0;
  interval: any;

  chartData: {name: any, series: { name: any, value: any}[]}[] = [{
    name: 'data',
    series: []
  }];

  constructor() {
    this.restoreChartData();
    this.restoreBestTime();
    this.init();
  }

  init() {
    for (let col = 0; col < this.width; col++) {
      for (let row = 0; row < this.height; row++) {
        this.tableCells.push({
          checked: false,
          value: 0
        })
      }
    }
  }

  shuffle() {
    let maxValue = this.tableCells.length;
    for (let i = 1; i <= maxValue; i++) {
      this.numbers.push(i);
    }
    this.tableCells.forEach(cell => {
      let value = <number>this.numbers[CounterService.getRandomInt(this.numbers.length)];
      this.numbers = this.numbers.filter(e => e !== value);

      cell.checked = false;
      cell.date = undefined;
      cell.value = value;
    })
  }

  start() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.current = 0;
    this.shuffle();
    this.time = 0;
    this.interval = setInterval(() => {
      this.time++;
    },100);

    this.started = true;
  }

  finish() {
    clearInterval(this.interval);
    this.started = false;
  }

  stop() {
    this.finish();
    this.time = 0;
  }

  isStarted(): boolean {
    return this.started;
  }

  setChecked(cell: TableCell): boolean {
    if (cell.checked) {
      return false;
    }
    if (cell.value === (this.current + 1)) {
      this.current++;
      cell.checked = true;
      cell.date = new Date();

      if (cell.value === this.size) {
        let result = localStorage.getItem(this.storageKey + 'results');
        let aResult = [];
        if (result) {
          aResult = JSON.parse(result);
        }

        aResult.push({ date: cell.date, score: (this.time / 10)})

        this.chartData[0].series.push({ name: cell.date, value: (this.time / 10)});

        this.lastResult = this.time / 10;

        this.totalTime += this.time / 10;
        this.gamesNum++;

        let strResult = JSON.stringify(aResult);
        localStorage.setItem(this.storageKey + 'results', strResult);

        if (!this.bestTime || (this.bestTime > (this.time / 10))) {
          this.bestTime = this.time / 10;
          this.saveBestTime();
        }

        this.finish();
      }

      return true;
    }

    return false;
  }

  private restoreBestTime() {
    let strBestTime = localStorage.getItem(this.storageKey + 'bestTime');
    if (strBestTime) {
      let tmpBestTime = parseFloat(strBestTime);
      if (!isNaN(tmpBestTime)) {
        this.bestTime = tmpBestTime;
      }
    }
  }

  private saveBestTime() {
    localStorage.setItem(this.storageKey + 'bestTime', this.bestTime.toString());
  }

  getBestTime() {
    return this.bestTime;
  }

  getLastResult() {
    return this.lastResult;
  }

  getAverageTime() {
    if (this.gamesNum == 0) {
      return 0;
    }
    return this.totalTime / this.gamesNum;
  }

  getNumberOfGames() {
    return this.gamesNum;
  }

  private static getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  restoreChartData() {
    let result = localStorage.getItem(this.storageKey + 'results');
    let aResult = [];
    this.totalTime = 0;
    if (result) {
      aResult = JSON.parse(result);
    }

    this.chartData[0].series = [];

    for (const v of aResult) {
      this.chartData[0].series.push({
        name: v.date,
        value: v.score
      });

      this.lastResult = v.score;

      this.totalTime += v.score;
      this.gamesNum++;
    }
  }

  getNext(): number {
    return (this.tableCells.length === this.current) ? 0 : (this.current + 1);
  }

}

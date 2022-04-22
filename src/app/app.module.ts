import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SchulteTableComponent } from './schulte-table/schulte-table.component';
import { TableCellComponent } from './shared/components/table-cell/table-cell.component';
//import { StatisticsComponent } from './statistics/statistics.component';
//import { NgxChartsModule } from "@swimlane/ngx-charts";
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EStatisticsComponent } from './estatistics/e-statistics.component';
import * as echarts from 'echarts';
import { NgxEchartsModule } from "ngx-echarts";
import { DatePipe } from "@angular/common";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BarElementComponent } from './shared/components/bar-element/bar-element.component';
import { StatElementComponent } from './shared/components/stat-element/stat-element.component';

@NgModule({
  declarations: [
    AppComponent,
    SchulteTableComponent,
    TableCellComponent,
    //StatisticsComponent,
    EStatisticsComponent,
    BarElementComponent,
    StatElementComponent
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    //NgxChartsModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

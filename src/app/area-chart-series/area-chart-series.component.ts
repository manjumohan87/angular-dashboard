import { Component } from '@angular/core';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'app-area-chart-series',
  templateUrl: './area-chart-series.component.html',
  styleUrls: ['./area-chart-series.component.css']
})
export class AreaChartSeriesComponent {
  initOpts = {
    renderer: 'svg',
    width: 595,
    height: 400
  };

  options: EChartsOption = {
    color: ['#3398DB'],
    title: {
      left: '50%',
      text: 'Daily Sales',
      textAlign: 'center',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [{
      type: 'value'
    }],
    series: [{
      name: 'Counters',
      type: 'bar',
      barWidth: '30%',
      data: [5, 10, 20, 30, 40, 50, 60]
    }]
  };
}

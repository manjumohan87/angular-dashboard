import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-chart-line',
  templateUrl: './area-chart-line.component.html',
  styleUrls: ['./area-chart-line.component.css']
})
export class AreaChartLineComponent implements OnInit{
  options: any;
  constructor() { }

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
     
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: (idx:any) => idx * 10,
        },
        
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx:any) => idx * 5,
    };
  }
  

}

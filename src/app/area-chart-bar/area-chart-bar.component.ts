import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
// import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart-bar',
  templateUrl: './area-chart-bar.component.html',
  styleUrls: ['./area-chart-bar.component.css']
})
export class AreaChartBarComponent {
    Highcharts = Highcharts
    chartOptions = {}
    constructor(){
      this.chartOptions={
        chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
          }
      },
      title: {
          text: 'Completed Tasks',
          align: 'center'
      },
      credits:{
        enabled: false
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      tooltip: {
          pointFormat: '<b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 35,
              dataLabels: {
                  enabled: true,
                  format: '{point.name}'
              }
          }
      },
      series: [{
          type: 'pie',
        //   name: 'Share',
          data: [
              ['12p', 23],
              ['3p', 18],
              ['6p', 11],
              ['9p', 20],
              ['12p', 8],
              ['3a', 30]
          ]
      }]
      }
    }


 
}

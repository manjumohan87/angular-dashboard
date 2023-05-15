import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart-bar-card',
  templateUrl: './chart-bar-card.component.html',
  styleUrls: ['./chart-bar-card.component.css']
})
export class ChartBarCardComponent { 
  @Input() description:string=""
  @Input() title:string=""
  @Input() smicon:string=""
  @Input() info:string=""
}

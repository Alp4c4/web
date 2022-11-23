import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-chart-women',
  templateUrl: './chart-women.component.html',
  styleUrls: ['./chart-women.component.css']
})
export class ChartWomenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void{    
   this.RenderChart();
  }
  RenderChart(){
    const ctx = document.getElementById('myChart');

  new Chart("myChart", {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }
}  

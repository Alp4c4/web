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
      labels: [ 'ระดับรุนแรง', 'ระดับปานกลาง', 'ระดับน้อย','ไม่มีอาการหรือมีน้อย' ],
      datasets: [{
        label: 'ช่วงอายุ20-25ปี',
        data: [100, 20, 30, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
         
        ],
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

import { Component } from '@angular/core';
import { Data2service } from '../../service';
import { ServiceService } from '../../service.service';
import { ServiceCollection } from 'src/app/service.collection';
import {Dataservice}from'../../service'
import { Dataround } from '../../service';
import { clearGlobalAppDefaultCred } from 'firebase-admin/lib/app/credential-factory';
import { collection } from 'firebase/firestore';
import { lastValueFrom } from 'rxjs';
import { stringify } from '@firebase/util';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-testbase',
  templateUrl: './testbase.component.html',
  styleUrls: ['./testbase.component.css']
})
export class TestbaseComponent {
  ngOnInit(): void {
    this.RenderChart();
  }
  RenderChart(){
  new Chart('myChart',{
    type:'line',
    data:{
      datasets:[{
        label:'First dataset',
        data:[0,20,40,50]
      }],
      labels:['Jan','Feb','March','Apr']
    },
    options:{
      scales:{
        y:{
          axis:'r'
        }
      }
    }
  })
}
      
  }

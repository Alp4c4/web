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
import { __values } from 'tslib';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  fullName:string='';
  name:string='';
  last:string='';
  items:any[]=[];
  // topics:any[]=['Bored','Concentration','Concern','Doslow','Hurtyourself','Meal','Myself','Sleep','Tired'];
  selectedValue:number=0;
  round:any='';
  tem:any[]=[];
  tem1:any[]=[];
  dataset:any='';
  temp_label:any[]=[];
  temp_data:any[]=[];
  temp_sd:any[]=[];
  temp_tes:any[]=[];
  onSubmit(){
    const[firstName,lastName]=this.fullName.split(' ');
    console.log("f",firstName);
    console.log("l",lastName);
    this.Search(firstName,lastName);
    console.log(this.tem.length)
    // this.CheckResult();
    
    
  }
  constructor(public dv: ServiceService,public dn:ServiceCollection,) {}
 
  Search(firstName:string,lastName:string){
    let temp:any='';
    let round:any='';
    let i=0;
   this.dv.getdata().subscribe((res: Dataservice[]) => {
       var am:any=[];
       res.forEach(function (value){
         if(value.username==firstName&&value.userlastname==lastName){
               round=value.round
               temp=value.userId
            for(let i=0;i < parseInt(value.round);i++){
                am.push(i)
            }
         }
        //  else if(value.username!=firstName&&value.userlastname!=lastName){
        //         window.location.reload();
        //  }
       })
       
       this.temp_label=am
       console.log(this.temp_label)
       this.round=round
   this.dn.getdata(temp).subscribe((res1: Data2service[]) => {
         let round=this.selectedValue
         this.tem=res1
         this.tem.pop()
         this.items=[res1[round].bored,res1[round].concentration,res1[round].concern,res1[round].doslow,res1[round].hurtyourself,res1[round].meal,res1[round].myself,res1[round].sleep,res1[round].tired,res1[round].status]
        for(let i=0;i<this.round-1;i++){
          this.temp_data[i]=(res1[i].status)
          this.temp_tes[i]=i+1
        }
        for(let i=0;i<this.round;i++){
          if(this.temp_data[i]=='ไม่มีอาการของโรคซึมเศร้าหรือมีอาการของโรคซึมเศร้าในปริมาณน้อย'){
            this.temp_sd[i]=0
          }
          else if(this.temp_data[i]=='ระดับน้อย'){
            this.temp_sd[i]=1
          }
          else if(this.temp_data[i]=='ระดับปานกลาง'){
            this.temp_sd[i]=2
          }
          else if(this.temp_data[i]=='ระดับรุนแรง'){
            this.temp_sd[i]=3
          }
          
        }
        this.RenderChart();
        })
        console.log(this.temp_sd)
        console.log(this.temp_data)
   });
 
  
 }
 
  RenderChart(){
    let arr=this.temp_label;
    // var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart('myChart', {
        type: 'line',
        data: {
            labels: this.temp_tes,
            datasets: [{
                label:'ผลลัพธ์ในการทำประเมินทั้งหมด',
                data: this.temp_sd,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
              y:{
                beginAtZero:true,
                ticks:{
                  maxTicksLimit :4,
                  callback:((context,index)=>{
                    let response;
                    if(context===1){
                      response='มีอาการน้อย';
                    }
                    else if(context===2){
                      response='มีอาการปานกลาง';
                    }
                    else if(context===3){
                      response='มีอาการรุนแรง';
                    }
                    else {
                      response='ไม่มีอาการ';
                  }
                  return response
                  })
                }
              }
            }
        }
    });
    
}
      
  }

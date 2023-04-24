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
  dataset:any='';
  onSubmit(){
    const[firstName,lastName]=this.fullName.split(' ');
    console.log("f",firstName);
    console.log("l",lastName);
    this.Search(firstName,lastName)
    console.log(this.tem.length)
  }
  ngOnInit(){
  //  this.getdata();
  //  console.log(m)
  //  this.getdata();
    // this.getdata2();
  }
  constructor(public dv: ServiceService,public dn:ServiceCollection,) {}
//   getdata(){
//   this.dv.getdata().subscribe((res: Dataservice[]) => {  
  //    this.dn.getdata(res[0]).subscribe((res: Data2service[]) => {
  // })
// })
//   }
  Search(firstName:string,lastName:string){
     let temp:any='';
     let round:any='';
    this.dv.getdata().subscribe((res: Dataservice[]) => {
        res.forEach(function (value){
          if(value.username==firstName&&value.userlastname==lastName){
                round=value.round
                temp=value.userId
                
            } 
            
        })
        this.round=round
    this.dn.getdata(temp).subscribe((res1: Data2service[]) => {
          let round=this.selectedValue
          this.tem=res1
          this.items=[res1[round].bored,res1[round].concentration,res1[round].concern,res1[round].doslow,res1[round].hurtyourself,res1[round].meal,res1[round].myself,res1[round].sleep,res1[round].tired,res1[round].status]
            console.log(this.items)
          })
          // this.dataset=this.items.length
    });
  
   
  }
  
}

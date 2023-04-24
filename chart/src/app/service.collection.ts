import { Injectable } from '@angular/core';
import { Firestore ,collectionData} from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { debounce, debounceTime, Observable } from 'rxjs';
import { Data2service, Dataround } from './service';
import { Dataservice } from './service';
import { ServiceService } from './service.service';
@Injectable({
    providedIn: 'root'
  })
  export class ServiceCollection {
    
    constructor(private fs:Firestore  ) {}
      data:any=[]
      getdata(userId:any ):Observable<Data2service[]>{
        
    const dataref =collection(this.fs,'User',userId,'รอบในการทำประเมิน');
    collectionData(dataref,{idField:'id'})
    return collectionData(dataref) as Observable<Data2service[] >
    }
    getround(userId:any):Observable<Dataround[]>{
      const dataref =collection(this.fs,'User',userId,'รอบในการทำประเมิน')
      collectionData(dataref,{idField:'id'})
      return collectionData(dataref) as Observable<Dataround[] >
    }
   
  }
 
import { Injectable } from '@angular/core';
import { Firestore ,collectionData} from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { debounce, debounceTime, Observable } from 'rxjs';
import { Dataservice } from './service';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private fs:Firestore ) {}
    data:any=[]
    getdata():Observable<Dataservice[]>{
    const dataref =collection(this.fs,'User');
    return collectionData(dataref,{idField:'id'}) as Observable<Dataservice[] >
  }
 
}


import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Dataservice } from './service';
import { ServiceService } from './service.service';
@Injectable({
  providedIn: 'root',
})
export class GetalldataService {
  data: any = [];
  constructor(private fs: ServiceService) {}
  getalldata() {
    let arr3: any = [];
    let little: number = 0;
    let middle: number = 0;
    let high: number = 0;
    let none: number = 0;
    this.fs.getdata().subscribe((res: Dataservice[]) => {
      res.forEach(function (value) {
        if (value.gender == 'ชาย') {
          switch (value.status) {
            case 'ระดับน้อย': {
              little += 1;
              arr3[2] = little;
              // a.data1=little
              break;
            }
            case 'ระดับปานกลาง': {
              middle += 1;
              arr3[1] = middle;
              // a.data2=middle
              break;
            }
            case 'ระดับรุนแรง': {
              high += 1;
              arr3[0] = high;
              // a.data3=high
              break;
            }
            case 'ไม่มีอาการของโรคซึมเศร้าหรือมีอาการของโรคซึมเศร้าในปริมาณน้อย': {
              none += 1;
              arr3[3] = none;
              // a.data4=none
              break;
            }
          }
        }
      });

      let array = [little, middle, high, none];
      // console.log(array)
      return array
    });
  }
}

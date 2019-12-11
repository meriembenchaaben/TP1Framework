import {EventEmitter, Injectable} from '@angular/core';
import {Person} from '../models/Person';
import {Observable, Subject} from 'rxjs';
import {HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Person[] = [new Person(1, 'Meriem', '1', 'Ben Chaaben', 23, 20000000, 'student'), new Person(2, 'Hassen', '2', 'dupont', 25, 25852258), new Person(3, 'Zeineb', '3', 'someone', 32)];
  cvsChanged = new Subject<Person[]>();
  refresh: Subject<any> = new Subject();

  constructor() {
  }

  getCvs() {
    return this.cvs.slice();
  }

  addCv(cv: Person) {
    this.cvs.push(cv);
    this.cvsChanged.next(this.cvs.slice());
  }

  removeCv(cv: Person) {
    let index = this.cvs.indexOf( cv );
    console.log('the index : '+ index);
    this.cvs.splice(index,1);
    console.log("done");
    console.log(this.cvs);
    this.refresh.next();
  }

  editCv(cv: Person) {
    const index = this.cvs.indexOf(cv);
    console.log(this.cvs);
    this.cvs[index] = cv;
    this.cvsChanged.next(this.cvs.slice());
  }

  getCv(id: number) {
    return(this.cvs[id]);
  }
}

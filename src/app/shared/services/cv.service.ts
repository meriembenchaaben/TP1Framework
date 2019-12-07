import {EventEmitter, Injectable} from '@angular/core';
import {Person} from '../models/Person';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Person[] = [new Person(1, 'Meriem', '1'), new Person(2, 'Hassen', '2'), new Person(3, 'Zeineb', '3')];
  cvsChanged = new Subject<Person[]>();

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
    this.cvs.splice(this.cvs.findIndex(value => cv));
    this.cvsChanged.next(this.cvs.slice());
  }

  editCv(cv: Person) {
    const index = this.cvs.indexOf(cv);
    console.log(this.cvs);
    this.cvs[index] = cv;
    this.cvsChanged.next(this.cvs.slice());
  }

}

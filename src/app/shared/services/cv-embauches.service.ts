import {Injectable} from '@angular/core';
import {Person} from '../models/Person';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvEmbauchesService {

  private cvs: Person[] = [];
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
}

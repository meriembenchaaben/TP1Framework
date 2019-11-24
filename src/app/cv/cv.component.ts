import {Component, OnInit} from '@angular/core';
import {Person} from '../shared/models/Person';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  person = new Person();

  constructor() {
  }

  ngOnInit() {
  }

  updatePerson(MyPerson) {
    this.person = MyPerson;
  }
}

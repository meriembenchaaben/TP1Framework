import {Component, OnInit} from '@angular/core';
import {Person} from '../shared/models/Person';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  person = new Person();
  all = 1;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['all']);
      this.all = params['all'];
    });
  }

  updatePerson(MyPerson) {
    this.person = MyPerson;
  }
}

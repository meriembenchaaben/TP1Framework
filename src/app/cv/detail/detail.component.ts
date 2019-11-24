import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../shared/models/Person';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input()  person: Person;
  constructor() { }

  ngOnInit() {
  }

}

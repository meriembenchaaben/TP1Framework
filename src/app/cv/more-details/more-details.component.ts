import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../shared/models/Person';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {

  @Input() person: Person;
  constructor() { }

  ngOnInit() {
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '../../../shared/models/Person';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }
  @Input() person: Person;
  @Output() CvDisplaying = new EventEmitter() ;
  ngOnInit() {
  }

  displayCV() {
    this.CvDisplaying.emit(this.person);
  }
}

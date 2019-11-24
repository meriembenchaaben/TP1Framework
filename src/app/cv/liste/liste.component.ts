import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '../../shared/models/Person';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  persons: Person[];
  @Output() CvDisplaying = new EventEmitter() ;

  constructor() {
    this.persons = [new Person(1, 'Meriem', '1'), new Person (2, 'Hassen', '2'), new Person(3, 'Zeineb', '3')];

  }

  ngOnInit() {
  }
  getPerson(MyPerson) {

    this.CvDisplaying.emit(MyPerson);

  }

}

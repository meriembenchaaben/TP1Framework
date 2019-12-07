import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '../../shared/models/Person';
import {Subscription} from 'rxjs';
import {CvService} from '../../shared/services/cv.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  persons: Person[];
  subscription: Subscription;
  @Output() CvDisplaying = new EventEmitter();

  constructor(private cvService: CvService) {

  }

  ngOnInit() {
    this.subscription = this.cvService.cvsChanged.subscribe(
      cv => this.persons = cv
    );
    this.persons = this.cvService.getCvs();
  }

  getPerson(MyPerson) {
    this.CvDisplaying.emit(MyPerson);
  }

}

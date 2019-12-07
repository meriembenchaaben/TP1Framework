import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CvEmbauchesService} from '../../../shared/services/cv-embauches.service';
import {Person} from '../../../shared/models/Person';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-listeembauches',
  templateUrl: './listeembauches.component.html',
  styleUrls: ['./listeembauches.component.css']
})
export class ListeembauchesComponent implements OnInit {
  @Output() CvDisplaying = new EventEmitter();
  constructor(private cvEmbauchesService: CvEmbauchesService) {
  }

  subscription: Subscription;
  private cvs: Person[];

  ngOnInit() {
    this.cvs = this.cvEmbauchesService.getCvs();
    this.subscription = this.cvEmbauchesService.cvsChanged.subscribe(
      cvs => this.cvs = cvs
    );
  }
  getPerson(MyPerson) {
    this.CvDisplaying.emit(MyPerson);
  }
}

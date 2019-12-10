import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../shared/models/Person';
import {CvService} from '../../shared/services/cv.service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {

  @Input() person: Person;
  constructor(private cvService: CvService) { }

  ngOnInit() {
  }

  delete() {
    this.cvService.removeCv(this.person);
  }
}

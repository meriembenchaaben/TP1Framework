import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../shared/models/Person';
import {CvService} from '../../shared/services/cv.service';
import {CvEmbauchesService} from '../../shared/services/cv-embauches.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() person: Person;

  constructor(private cvService: CvService, private cvembaucheService: CvEmbauchesService) {
  }

  ngOnInit() {
  }

  embaucher() {
    this.person.embauche = true;
    this.cvService.editCv(this.person);
    this.cvembaucheService.addCv(this.person);
  }
}

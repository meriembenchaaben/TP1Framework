import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Person} from '../../shared/models/Person';
import {CvService} from '../../shared/services/cv.service';
import {CvEmbauchesService} from '../../shared/services/cv-embauches.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit,OnChanges {

  @Input() person: Person;
  @Input() Index: number;
  show = false;

  constructor(private cvService: CvService, private cvembaucheService: CvEmbauchesService, private router: Router) {
  }

  ngOnInit() {
  }
  ngOnChanges() {
    this.show = false;
  }

  embaucher() {
    this.person.embauche = true;
    this.cvService.editCv(this.person);
    this.cvembaucheService.addCv(this.person);
  }
  details() {
    this.show = true;
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Person} from '../shared/models/Person';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {CvService} from '../shared/services/cv.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private submitted = false;
  private id: number ;
  person: Person ;

  constructor(private  cvService: CvService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {this.id = params.id; });
    this.person = this.cvService.getCv(this.id - 1);
  }

  reset(formulaire: NgForm) {
    formulaire.resetForm();
  }
  onSubmit(formulaire: NgForm) {
    this.submitted = formulaire.valid;
    if (!this.submitted) {
      return;
    }
    this.person.job = formulaire.controls[ 'job' ].value;
    this.person.nom = formulaire.controls['Name'].value;

    this.person.age = formulaire.controls['age'].value;
    this.person.prenom = formulaire.controls['prenom'].value;

    this.person.cin = formulaire.controls['cin'].value;

    this.cvService.editCv(this.person);
    this.router.navigate(['/cv/1']);
  }
  }

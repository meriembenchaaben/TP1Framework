import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  taille = 20;
  couleur = 'blue';
  polices = ['arial', 'helvetica', 'garmound', 'calibri'];
  selectedPolice = 'arial';
  selectedItem = 'blue';

  constructor() {
  }

  ngOnInit() {
  }

  changePolice(police) {
    this.selectedPolice = police;
  }


}

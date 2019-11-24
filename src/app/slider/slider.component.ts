import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() {
  }

  path = 'default.png';
  slider = new Observable<string>(
    (observer) => {
      const tab = ['rotating_card_profile1.png', 'rotating_card_profile2.png'];
      let i = 0;
      setInterval(() => {
        i = (i + 1) % 2;
        observer.next(tab[i]);
      }, 1000);
    });

  ngOnInit() {
    this.slider.subscribe(
      (val: string) => this.path = val
    );
  }
}

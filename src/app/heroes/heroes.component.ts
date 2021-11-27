import { Hossein } from './../hero';
import { Component, OnInit } from '@angular/core';
// import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hossein = {
    age: 17,
    lastname: 'zargar'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

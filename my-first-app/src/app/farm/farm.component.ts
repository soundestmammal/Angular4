import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-farm]',
  // selector: '.app-farm',
  selector: 'app-farm',
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

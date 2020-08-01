import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos-individuais',
  templateUrl: './titulos-individuais.component.html',
  styleUrls: ['./titulos-individuais.component.css']
})
export class TitulosIndividuaisComponent implements OnInit {
  breakpoint: number;
  rows: number;
  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 6;
    this.rows = (window.innerWidth <= 600) ? 6 : 12;
  }

  onResize(event) {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 6;
    this.rows = (window.innerWidth <= 600) ? 6 : 12;
  }
}

import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
  standalone: false,
})
export class Pagina3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  n1:number = 0;
  n2:number = 0;
  res:number = 0;

  sumar() {
    this.res = this.n1 + this.n2;
    console.log(this.res);
  }

}

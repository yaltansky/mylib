import { Component, OnInit } from '@angular/core';
import { Mylib1Service } from '../services/index';
import * as momentImported from 'moment'; const moment = momentImported;

@Component({
  selector: 'mylib-component2',
  template: `<p>mylib-component2 works now {{time}}!</p>`,
  styles: [],
  providers: [Mylib1Service]
})
export class Mylib2Component implements OnInit {
  time: string;

  constructor(public svc: Mylib1Service) { }

  ngOnInit() {
    this.time = moment().format('DD.MM.YYYY');
    console.log(this.svc.testMethod() + ' from mylib.component2');
  }
}

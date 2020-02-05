import { Component, OnInit } from '@angular/core';
import * as momentImported from 'moment'; const moment = momentImported;
import { Mylib1Service } from '../services/index';
import { coreFunc1 } from '../core/index';

@Component({
  selector: 'mylib-component1',
  template: `<p>mylib-component1 works now {{time}}!</p>`,
  styles: [],
  providers: [Mylib1Service]
})
export class Mylib1Component implements OnInit {
  time: string;

  constructor(public svc: Mylib1Service) { }

  ngOnInit() {
    this.time = moment().format('DD.MM.YYYY');
    console.log(this.svc.testMethod() + ' from mylib.component1');
    coreFunc1();
  }
}

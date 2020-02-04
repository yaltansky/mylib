import { Component, OnInit } from '@angular/core';
// import * as momentImported from 'moment'; const moment = momentImported;

@Component({
  selector: 'mylib-mylib',
  template: `<p>mylib works now {{time}}!</p>`,
  styles: [],
})
export class MyLibComponent implements OnInit {
  time: string;
  ngOnInit() {
    // this.time = moment().format('DD.MM.YYYY');
  }
}

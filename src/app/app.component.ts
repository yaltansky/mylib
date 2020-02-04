import { Component, OnInit } from '@angular/core';
// import { testFunc } from 'mylib';
import { MyLibService } from 'mylib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngtest';

  constructor(
    public svc: MyLibService
  ) { }

  ngOnInit(): void {
    // testFunc();
    // testFunc2();
    this.svc.testMethod();
  }
}

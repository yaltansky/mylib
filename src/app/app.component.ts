import { Component, OnInit } from '@angular/core';
import { Mylib1Service } from 'mylib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngtest';

  constructor(
    public svc: Mylib1Service
  ) { }

  ngOnInit(): void {
    console.log(this.svc.testMethod() + ' from app');
  }
}

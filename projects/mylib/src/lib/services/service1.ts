import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Mylib1Service {
  constructor() { }

  testMethod(): string {
    return 'testMethod() called';
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {
  constructor() { }

  testMethod(): void {
    console.log('testMethod called');
  }
}

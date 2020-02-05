import { NgModule } from '@angular/core';
import { Mylib1Component } from './component1';
import { Mylib2Component } from './component2';

const components = [
  Mylib1Component,
  Mylib2Component,
];

@NgModule({
  declarations: components,
  imports: [],
  exports: components
})
export class MylibComponentsModule { }

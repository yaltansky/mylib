import { NgModule, ModuleWithProviders } from '@angular/core';
import { MylibComponentsModule } from './components/index';
import { Mylib1Service } from './services/index';

@NgModule({
  declarations: [],
  imports: [MylibComponentsModule],
  exports: [MylibComponentsModule]
})
export class MylibModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: MylibModule,
      providers: [Mylib1Service]
    };
  }
}

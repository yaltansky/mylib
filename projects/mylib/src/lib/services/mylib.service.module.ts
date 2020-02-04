import { NgModule, ModuleWithProviders } from '@angular/core';
import { MyLibService } from './mylib.service';

@NgModule({})
export class MyLibServicesModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyLibServicesModule,
      providers: [MyLibService]
    };
  }
}

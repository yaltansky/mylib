import { NgModule, ModuleWithProviders } from '@angular/core';
import { MyLibComponentsModule } from './components';

@NgModule({
  declarations: [],
  imports: [MyLibComponentsModule],
  exports: [MyLibComponentsModule]
})
export class MyLibModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyLibModule,
      providers: []
    };
  }
}

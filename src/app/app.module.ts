import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor() {
  }
  // ngDoBootstrap() { }
  ngDoBootstrap(appRef: ApplicationRef) {
    const rootElements = document.querySelectorAll('app-root');
    for (const element of rootElements as any as HTMLElement[]) {
      appRef.bootstrap(AppComponent, element);
    }
  }
}

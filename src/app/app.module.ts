import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AppComponent,ListingComponent]
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


    const rootElements2 = document.querySelectorAll('app-listing');
    for (const element of rootElements2 as any as HTMLElement[]) {
      appRef.bootstrap(ListingComponent, element);
    }
  }
}

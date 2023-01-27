import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponsiveMenuComponent } from './responsive-menu/responsive-menu.component';
import { HoverAnimationMenuComponent } from './hover-animation-menu/hover-animation-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveMenuComponent,
    HoverAnimationMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

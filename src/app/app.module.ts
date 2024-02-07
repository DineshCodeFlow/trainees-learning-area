import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftComponent } from './left/left.component';
import { CenterComponent } from './center/center.component';
import { RightComponent } from './right/right.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftComponent,
    CenterComponent,
    RightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

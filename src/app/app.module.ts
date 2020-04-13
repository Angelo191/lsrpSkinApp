import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// custom imports
import { SkinService } from "./services/skin.service";
import { SkinListComponent } from './skin-list/skin-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SkinListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SkinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

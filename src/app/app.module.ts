import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { TimeLineComponent } from './reusable-components/common-module/time-line/time-line.component';
import { CommonModuleModule } from './reusable-components/common-module/common-module.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModuleModule
  ],
  providers: [],
  exports: [ TimeLineComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }

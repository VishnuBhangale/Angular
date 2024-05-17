import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo } from './Demo/demo.component';
import { ExerciseDemo } from './Demo/Exercise.component';


@NgModule({
  declarations: [
    AppComponent,
    Demo,
    ExerciseDemo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

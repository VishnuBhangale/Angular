import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomenewRoutingModule } from './homenew-routing.module';
import { HomenewComponent } from './homenew.component';


@NgModule({
  declarations: [
    HomenewComponent
  ],
  imports: [
    CommonModule,
    HomenewRoutingModule
  ]
})
export class HomenewModule {
  constructor() {
    console.log('HomeModule called');
    
  }
 }

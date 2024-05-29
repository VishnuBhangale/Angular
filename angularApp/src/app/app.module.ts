import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo } from './Demo/demo.component';
import { ExerciseDemo } from './Demo/Exercise.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AssignmentAlert01Component } from './assignment-alert01/assignment-alert01.component';
import { AssignmentAlert02Component } from './assignment-alert02/assignment-alert02.component';
import { SearchComponent } from './search/search.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { FormsModule } from '@angular/forms';
import { Twowaydatabinding01Component } from './twowaydatabinding01/twowaydatabinding01.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { SwitchComponent } from './switch/switch.component';
import { AssignmentStructuralDirectivesComponent } from './assignment-structural-directives/assignment-structural-directives.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustomDirective } from './directives/custom.directive';
import { DropdownlistComponent } from './dropdownlist/dropdownlist.component';


@NgModule({
  declarations: [
    AppComponent,
    Demo,
    ExerciseDemo,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AssignmentAlert01Component,
    AssignmentAlert02Component,
    SearchComponent,
    TwowaydatabindingComponent,
    Twowaydatabinding01Component,
    ParentComponent,
    ChildComponent,
    ColorPickerComponent,
    TodoItemComponent,
    AddToCartComponent,
    SwitchComponent,
    AssignmentStructuralDirectivesComponent,
    NgstyleComponent,
    NgclassComponent,
    CustomDirective,
    DropdownlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

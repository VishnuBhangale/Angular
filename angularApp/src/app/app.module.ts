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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';

import { SimpleComponent } from './simple/simple.component';
import { RegisterComponent } from './register/register.component';
import { BiodataComponent } from './biodata/biodata.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { TodoComponent } from './todo/todo.component';
import { PipeconvertComponent } from './pipeconvert/pipeconvert.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ApiassignmentComponent } from './apiassignment/apiassignment.component';


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
    DropdownlistComponent,
    SimpleComponent,
    RegisterComponent,
    BiodataComponent,
    ReactiveformComponent,
    RapidapiComponent,
    TodoComponent,
    PipeconvertComponent,
    FilterPipe,
    ApiassignmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,   
    MatFormFieldModule, 
    MatSlideToggleModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSelectModule,
    MatDividerModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Todo } from './models/todo';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { ApiintegrationComponent } from './apiintegration/apiintegration.component';

// Configure the routes
// configure the routes .
const routes: Routes = [
  { path: '' , redirectTo: 'login', pathMatch: 'full'},// localhost://4200
  { path: 'login', component: LoginComponent },
  { path : 'home', component: HomeComponent } ,// localhost://4200
  { path: 'aboutus', component: AboutusComponent }, // localhost://4200/aboutus
  { path: 'contactus', component: ContactusComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'product', component: ApiintegrationComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

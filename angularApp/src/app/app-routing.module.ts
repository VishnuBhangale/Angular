import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Todo } from './models/todo';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { ApiintegrationComponent } from './apiintegration/apiintegration.component';
import { TodoviewComponent } from './todoview/todoview.component';
import { OrderComponent } from './order/order.component';
import { ChatComponent } from './chat/chat.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';

// Configure the routes
// configure the routes .
// const routes: Routes = [
//   { path: '' , redirectTo: 'login', pathMatch: 'full'},// localhost://4200
//   { path: 'login', component: LoginComponent },
//   { path : 'home', component: HomeComponent } ,// localhost://4200
//   { path: 'aboutus', component: AboutusComponent }, // localhost://4200/aboutus
//   { path: 'contactus', component: ContactusComponent},
//   { path: 'todo', component: TodoComponent},
//   { path: 'product', component: ApiintegrationComponent},
//   { path: 'todoview/:id', component: TodoviewComponent},
  
//   { path: '**', component: PagenotfoundComponent}
// ];
const routes: Routes = [
  { path: 'homenew', loadChildren: () => import('./homenew/homenew.module').then(m => m.HomenewModule) },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: '' , redirectTo: 'homenew', pathMatch: 'full'},  
  {path: 'order', component: OrderComponent },
  {path: 'chat', component: ChatComponent },
  {path: 'rapidapi', component : RapidapiComponent},
  { path: '**', redirectTo: 'homenew'}
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

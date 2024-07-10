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
import { AddProductCatalogComponent } from './ecommerse/add-product-catalog/add-product-catalog.component';
import { ProductCartComponent } from './ecommerse/product-cart/product-cart.component';
import { AuthGuard } from './guards/auth.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { AdduserComponent } from './adduser/adduser.component';
import { RxjsComponent } from './rxjs/rxjs.component';


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
  { path: 'homenew',canActivate: [AuthGuard], loadChildren: () => import('./homenew/homenew.module').then(m => m.HomenewModule) },
  { path: 'product',canActivate: [AuthGuard], loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) },
  {path: 'login', component:LoginComponent },  
  {path: 'order', component: OrderComponent },
  { path: '' , redirectTo: 'login', pathMatch: 'full'},  
  {path: 'chat', component: ChatComponent },
  {path: 'rapidapi', component : RapidapiComponent},
  {path: 'todo', component : TodoComponent},
  {path: 'productCatalog',component:AddProductCatalogComponent},
  {path: 'productList',component:ApiintegrationComponent},
  {path: 'productCart',component:ProductCartComponent},
  {path: 'adduser', component: AdduserComponent, canDeactivate: [CanDeactivateGuard]},
  {path: 'rxjs',component:RxjsComponent},
  //{ path: '**', redirectTo: 'login'}
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

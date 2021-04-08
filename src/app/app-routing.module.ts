import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HelloComponent } from './hello/hello.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserlistComponent } from './userlist/userlist.component';


const routes:Routes = [
 
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"products",
    component:ProductslistComponent,

  },
  
  {
    path:"inventory",
    component:InventoryComponent
  },
  {
    path:"users",
    component:UserlistComponent
  },
  
  {
    path:"reg",
    component:RegistrationComponent
  },
  {
    path:"Home",
    component: HelloComponent
  },
  {
    path:"cart",
    component:CartComponent
  },
  {
    path:"**",
    component:HelloComponent
  },
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}

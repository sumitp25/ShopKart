import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { RegistrationComponent } from './registration/registration.component';

import { HeaderComponent } from './header/header.component';
import { InventoryComponent } from './inventory/inventory.component';
import { HelloComponent } from './hello/hello.component';
import { CartComponent } from './cart/cart.component';
import { UpdateinventoryComponent } from './updateinventory/updateinventory.component';

@NgModule({
  declarations: [ //list of components part of this module
    AppComponent,HelloComponent ,LoginComponent,MenuComponent,ProductslistComponent,
    InventoryComponent,CartComponent,UserlistComponent,UserdetailsComponent,
    RegistrationComponent,HeaderComponent,
    PagenotfoundComponent,
    UpdateinventoryComponent
  ],
  imports: [ //list of modules used by this module
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //Define which is the Root component
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BillComponent } from './bill/bill.component';
import { BillService } from './Services/bill.service';

import { ChatComponent } from './chat/chat.component';
import { AdmincategoryComponent } from './admincategory/admincategory.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CategoriesComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodPageComponent,
    NotFoundComponent,
    LoginPageComponent,
    RegisterPageComponent,
    PaymentPageComponent,
    AdminDashboardComponent,

    DashboardComponent,
    BillComponent,
 
    ChatComponent,
      AdmincategoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    GooglePayButtonModule, 
    ReactiveFormsModule   
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    BillService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

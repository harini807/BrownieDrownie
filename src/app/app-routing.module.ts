import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoriesComponent } from './categories/categories.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BillComponent } from './bill/bill.component';
import { ChatComponent } from './chat/chat.component';
import { AdmincategoryComponent } from './admincategory/admincategory.component';


const routes: Routes = [
  

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component:HomepageComponent},
  {path:'Categories',component:CategoriesComponent},
  {path:'search/:searchItem',component:CategoriesComponent},
  {path:'tag/:tag',component:CategoriesComponent},
  {path:'food/:id',component:FoodPageComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'payment',component:PaymentPageComponent},
  {path:'bill',component:BillComponent},
  {path:'chat',component:ChatComponent},
  {path:'admin',component:AdminDashboardComponent,children:[
    {path:'Dashboard',component:DashboardComponent},
    {path:'AdminCategory',component:AdmincategoryComponent}
  ]}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

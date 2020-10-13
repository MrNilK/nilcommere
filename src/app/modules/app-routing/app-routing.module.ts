import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MobilesComponent } from './../../product/mobiles/mobiles.component';
import { BooksComponent } from './../../product/books/books.component';
import { BikesComponent } from './../../product/bikes/bikes.component';
import { MotoComponent } from './../../product/mobiles/moto/moto.component';
import { SamsComponent } from './../../product/mobiles/sams/sams.component';
import { PageNotFoundComponent } from './../../layout/page-not-found/page-not-found.component';
import { ProductViewComponent } from './../../layout/product-view/product-view.component';
import { HomeComponent } from './../../layout/home/home.component';
import { TempComponent } from 'src/app/components/forms/temp/temp.component';
import { ReactComponent } from 'src/app/components/forms/react/react.component';
import { DashboardComponent } from './../../admin/dashboard/dashboard.component';
import { LoginComponent } from './../../auth/login/login.component';
import { AuthGuard } from './../../guards/auth.guard';

const appRoutes: Routes = [
  { path:'home', component: HomeComponent },
  {path:'temp', component:TempComponent },
  {path:'react', component:ReactComponent },
  {path:'login', component:LoginComponent },
  {path:'dash', component:DashboardComponent, canActivate : [AuthGuard]},
  {  
    path: 'mobiles',
    component: MobilesComponent,
    children: [
      { path: 'moto', component: MotoComponent },
      { path: 'sams', component: SamsComponent },
    ],
  }, 

  { path: 'books', component: BooksComponent },
  { path: 'bikes', component: BikesComponent },
  { path: 'prodView/:prodID', component: ProductViewComponent },
  

  { path: '**', component: PageNotFoundComponent }, //Error must be at last
  { path: 'error', component: PageNotFoundComponent }, //Error must be at last
];

@NgModule({
  declarations: [
    MobilesComponent,
    BikesComponent,
    BooksComponent,
    MotoComponent,
    SamsComponent,
    PageNotFoundComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
  
  ],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';


import {RouterModule} from '@angular/router';
import { FormProductComponent } from './form-product/form-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductShowcaseComponent } from './product-showcase/product-showcase.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FormProductComponent,
    NotFoundComponent,
    DetailProductComponent,
    HomeComponent,
    ProductShowcaseComponent,
    UpdateproductComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:ProductsComponent
      },
      {
        path:'home',
        component:ProductsComponent
      },
      {
        path:'addProduct',
        component:FormProductComponent
      },
      {
        path:'NotFound',
        component:NotFoundComponent
      },{
        path:'DetailProduct/:id/:image',
        component:DetailProductComponent
      },{
        path:'UpdateProduct/:id/:name/:image/:likes/:Prix',
        component:UpdateproductComponent
      },{
        path:'ShowCase',
        component:ProductShowcaseComponent
      },
      {path: '**', redirectTo: 'NotFound'}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryShowComponent } from './components/category-show/category-show.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductShowComponent } from './components/product-show/product-show.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    CategoryShowComponent,
    AddProductComponent,
    ProductsListComponent,
    ProductShowComponent,
    CategoriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

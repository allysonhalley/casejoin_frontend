import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AddCategoryComponent} from "./components/add-category/add-category.component";
import {CategoriesListComponent} from "./components/categories-list/categories-list.component";
import {CategoryShowComponent} from "./components/category-show/category-show.component";
import {ProductsListComponent} from "./components/products-list/products-list.component";
import {ProductShowComponent} from "./components/product-show/product-show.component";
import {AddProductComponent} from "./components/add-product/add-product.component";

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesListComponent },
  { path: 'categories/:id', component: CategoryShowComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:id', component: ProductShowComponent },
  { path: 'add-product', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

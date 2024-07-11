import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AddCategoryComponent} from "./components/add-category/add-category.component";
import {CategoriesListComponent} from "./components/categories-list/categories-list.component";
import {CategoryShowComponent} from "./components/category-show/category-show.component";

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesListComponent },
  { path: 'categories/:id', component: CategoryShowComponent },
  { path: 'add', component: AddCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

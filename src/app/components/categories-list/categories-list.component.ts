import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css'
})
export class CategoriesListComponent implements OnInit {

  categories?: Category[];
  currentCategory: Category = {};
  currentIndex: number = -1;
  id: string ='';
  name: string ='';

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.retrieveCategories();
  }

  retrieveCategories(): void {
    this.categoryService.getAll()
    .subscribe({
      next: data => {
        this.categories = data;
        console.log(data);
      },
      error: err => console.log(err)
    });
  }

  refreshList(): void {
    this.retrieveCategories();
    this.currentCategory = {};
    this.currentIndex = -1;
  }

  setActiveCategory(category: Category, index: number): void {
    this.currentCategory = category;
    this.currentIndex = index;
  }

  removeCategory(id: any): void {
    this.categoryService.delete(id)
      .subscribe({
        next: data => {
          this.retrieveCategories();
          this.ngOnInit();
          console.log(data);
        },
        error: err => console.log(err)
      });
  }

  removeAllCategories(): void {
    this.categoryService.deleteAll()
    .subscribe({
      next: (res) => {
        console.log(res);
        this.retrieveCategories();
      },
      error: err => console.log(err)
    });
  }

  searchCategoryByName(): void {
    this.currentCategory = {};
    this.currentIndex = -1;

    this.categoryService.searchCategoryByName(this.name)
    .subscribe({
      next: data => {
        this.categories = data;
        console.log(data);
      },
      error: err => console.log(err)
    });

  }
}

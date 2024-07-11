import { Component } from '@angular/core';
import {Category} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  category: Category = {
    name: '',
    description: '',
  };
  submitted = false;

  constructor(private categoryService: CategoryService) {}

  saveCategory(): void {
    const data = {
      name: this.category.name,
      description: this.category.description
    };

    this.categoryService.create(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      }
    });
  }

  newCategory(): void {
    this.submitted = false;
    this.category = {
      name: '',
      description: '',
    };
  }
}

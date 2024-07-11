import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-category-show',
  templateUrl: './category-show.component.html',
  styleUrl: './category-show.component.css'
})
export class CategoryShowComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentCategory: Category = {
    name: '',
    description: ''
  };

  message='';

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    if (this.viewMode) {
      this.message = '';
      this.getCategory(this.activatedRoute.snapshot.params['id']);
    }
  }

  getCategory(id: string): void {
    this.categoryService.get(id)
    .subscribe({
      next: (data) => {
        this.currentCategory = data;
        console.log(data);
      },
      error: err => console.log(err)
    });
  }

  updateCategory(): void {
    this.message = '';

    this.categoryService.update(this.currentCategory.id, this.currentCategory)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message ? res.message : null;
      },
      error: err => console.log(err)
    });
  }

  deleteCategory(): void {
    this.categoryService.delete(this.currentCategory.id)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/categories']);
      },
      error: err => console.log(err)
    })
  }

}

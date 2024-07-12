import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {Category} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{

  product: Product = {
    name: '',
    category: new Category(),
  };
  categories?: Category[];
  submitted = false;

  constructor(private productService: ProductService, private categoryService: CategoryService) {}

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

  saveProduct(): void {
    const data = {
      name: this.product.name,
      category_id: this.product.category
    };

    this.productService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        }
      });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: '',
      category: new Category,
    };
  }

  protected readonly Category = Category;

}

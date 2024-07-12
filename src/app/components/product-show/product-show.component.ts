import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../models/category.model";
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrl: './product-show.component.css'
})
export class ProductShowComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentProduct: Product = {
    id: '',
    name: '',
    category: new Category,
};

  message = '';

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    if (this.viewMode) {
      this.message = '';
      this.getProduct(this.activatedRoute.snapshot.params['id']);
    }
  }

  getProduct(id: string): void {
    this.productService.get(id)
      .subscribe({
        next: (data) => {
          this.currentProduct = data;
          console.log(data);
        },
        error: err => console.log(err)
      });
  }

  updateProduct(): void {
    this.message = '';

    this.productService.update(this.currentProduct.id, this.currentProduct)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : null;
        },
        error: err => console.log(err)
      });
  }

  deleteProduct(): void {
    this.productService.delete(this.currentProduct.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/products']);
        },
        error: err => console.log(err)
      })
  }



}

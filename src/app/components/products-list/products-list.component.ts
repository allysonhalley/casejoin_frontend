import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {Category} from "../../models/category.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{

  products?: Product[];
  currentProduct: Product = {};
  currentIndex: number = -1;
  id: string = '';
  name: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productService.getAll()
      .subscribe({
        next: data => {
          this.products = data;
          console.log(data);
        },
        error: err => console.log(err)
      });
  }

  refreshList(): void {
    this.retrieveProducts();
    this.currentProduct = {};
    this.currentIndex = -1;
  }

  setActiveProduct(product: Product, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }

  removeProduct(id: any): void {
    this.productService.delete(id)
      .subscribe({
        next: data => {
          this.retrieveProducts();
          this.ngOnInit();
          console.log(data);
        },
        error: err => console.log(err)
      });
  }

  removeAllProducts(): void {
    this.productService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.retrieveProducts();
        },
        error: err => console.log(err)
      });
  }

  searchProductByName(): void {
    this.currentProduct = {};
    this.currentIndex = -1;

    this.productService.searchProductByName(this.name)
      .subscribe({
        next: data => {
          this.products = data;
          console.log(data);
        },
        error: err => console.log(err)
      });

  }

}

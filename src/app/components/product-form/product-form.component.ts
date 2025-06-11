import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  product: Product = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0,
    categoryId: 0
  };

  constructor(private productService: ProductService) {}

  submit() {
  const existingCategoryId = this.product.categoryId;

  this.productService.createProduct(this.product).subscribe(() => {
    alert('Product created!');
    this.product = {
      id: 0,
      name: '',
      quantity: 0,
      price: 0,
      categoryId: existingCategoryId
    };
  });
}

}

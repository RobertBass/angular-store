import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ProductComponent } from '@product.components/product/product.component'
import { HeaderComponent } from '@shared/components/header/header.component';
import { Product } from '@shared/models/product.model'
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  ngOnInit(){
    this.productService.getProducts()
      .subscribe({
        next: (products) => {
          this.products.set(products);
        },
        error: (error) => console.log(error)
      },
    );
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }
}

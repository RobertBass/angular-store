import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ProductComponent } from './../../components/product/product.component'
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Product } from '../../../shared/models/product.model'

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Prod 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod 2',
        price: 150,
        image: 'https://picsum.photos/640/640?r=20',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod 3',
        price: 75,
        image: 'https://picsum.photos/640/640?r=13',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod 4',
        price: 60,
        image: 'https://picsum.photos/640/640?r=33',
        createdAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  addToCart(product: Product){
    this.cart.update(prevState => [...prevState, product]);
  }
}

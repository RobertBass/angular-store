import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) img: string = '';
  @Input({required: true}) price: number = 0;
  @Input({required: true}) title: string = '';

  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    console.log('Click form child');
    this.addToCart.emit('Mensaje desde el hijo ' + this.title);

  }
}

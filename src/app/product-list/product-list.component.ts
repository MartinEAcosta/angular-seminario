import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  items: Product[] = [] ;

  constructor(
    private cart: ProductCartService,
    private productDataService: ProductDataService) { }

  ngOnInit(): void {
    this.productDataService.getAll().subscribe(items => this.items = items)
  }

  addToCart(item: any): void{
    this.cart.addToCart(item);
    item.stock -= item.quantity;
    item.quantity = 0;
  }

  maxReached(m: string){
    alert(m);
  }
}

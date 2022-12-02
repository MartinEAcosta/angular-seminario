import { Component, OnInit } from '@angular/core';
import { elementAt, Observable, observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {


  cartList$!: Observable<Product[]>;
  item: Product[] = [] ;

  constructor(private cart : ProductCartService) {

    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {

  }

  clearCart(item : any) {

    this.cart.clearCart();
  }


}

import { isNgTemplate, ThisReceiver } from '@angular/compiler';
import { Injectable, IterableDiffers } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/Product';


@Injectable({
  providedIn: 'root'
})

export class ProductCartService {

  private _cartList: Product[] = [];
  //Al definirlo como arreglo vacio me tira error por lo cual lo hago con el this
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList);


  constructor() { }


  addToCart(item: Product) {
    // Busca el nombre, si lo encuentra en vez de duplicar el item se encarga de asociarlo y sumarlo, en caso de no encontrarlo
    // se encarga de clonarlo y insertarlo.
    let article: Product = this._cartList.find((v1)=> v1.name == item.name)!;
    if(!article){
      this._cartList.push({... item});

    }else{
      article.quantity += item.quantity;
    }
    // Toma el nuevo valor pasado por la variable privada
    this.cartList.next(this._cartList);
  }

  clearCart() {
    this._cartList=[];
    this.cartList.next(this._cartList);
  }

}

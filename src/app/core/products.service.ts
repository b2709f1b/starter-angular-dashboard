import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { products } from './products-mock';

@Injectable()
export class ProductsService {
  private products: any[] = products;

  constructor() {
  }

  public getProducts(): Observable<any[]> {
    return new Observable((observer) => {
      observer.next(this.products);
    });
  }
}

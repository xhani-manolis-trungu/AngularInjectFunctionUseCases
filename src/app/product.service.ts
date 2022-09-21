import { Inject } from '@angular/core';
import { BaseHttpService } from './base-http.service';

@Inject({
  providedIn: 'root',
})
export class ProductService extends BaseHttpService {
  url: string = 'products';

  constructor() {
    super();
  }
}

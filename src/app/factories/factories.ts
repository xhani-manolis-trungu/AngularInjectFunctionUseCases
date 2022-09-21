import { inject } from '@angular/core';
import { ProductService } from '../product.service';
import { first } from 'rxjs';

export const customLoggerFactory = () => {
  const productService = inject(ProductService);
  return {
    log: (value?: string) => {
      productService.post(value).pipe(first()).subscribe();
    },
  };
};

export const setSearch = () => {
  const productService = inject(ProductService);
  return {
    setSearch: (value: string) => {
      productService.post(value).pipe(first()).subscribe();
    },
  };
};

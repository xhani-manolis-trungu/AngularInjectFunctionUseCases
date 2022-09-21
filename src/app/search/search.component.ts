import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetSearch } from '../state/app.actions';
import { Observable } from 'rxjs';

export const postSearchString = (): ((value: string) => Observable<any>) => {
  const store = inject(Store);

  return (value: string) => store.dispatch(new SetSearch(value));
};

@Component({
  selector: 'app-search',
  template: ``,
})
export class SearchComponent implements OnInit {
  // With constructor
  // constructor(private store: Store, private productService: ProductService) {}

  // Without constructor
  private _postSearchString = postSearchString();

  ngOnInit(): void {
    // Code without dependencies in constructor
    this._postSearchString('Post Search String from search component');

    // Code with dependencies in constructor
    // this.productService.post('search this').pipe(first()).subscribe();
    // this.store.dispatch(new SetSearch('search this'));
  }
}

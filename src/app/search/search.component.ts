import { Component, OnInit } from '@angular/core';
import { postSearchString } from '../searchRESTMethods';

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

import { inject, Injectable } from '@angular/core';
import { StateContext } from '@ngxs/store';
import { Action, State } from '@ngxs/store';
import { ProductService } from '../product.service';
import { SetSearch } from './app.actions';
import { first, Observable } from 'rxjs';

export class AppStateModel {
  searchString: string;
}

@Injectable()
@State<AppStateModel>({
  name: 'appState',
  defaults: {
    searchString: null,
  },
})
export class AppState {
  private _productService = inject(ProductService);
  constructor() {}

  @Action(SetSearch)
  setSearch(
    { patchState }: StateContext<AppStateModel>,
    { searchString }: SetSearch
  ): Observable<any> {
    patchState({ searchString });
    return this._productService
      .post(searchString)
      .pipe(first());
  }
}

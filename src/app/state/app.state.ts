import { Injectable } from '@angular/core';
import { StateContext } from '@ngxs/store';
import { Action, State } from '@ngxs/store';
import { SetSearch } from './app.actions';

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
  constructor() {}

  @Action(SetSearch)
  setSearch(
    { patchState }: StateContext<AppStateModel>,
    { searchString }: SetSearch
  ): void {
    patchState({ searchString });
  }
}

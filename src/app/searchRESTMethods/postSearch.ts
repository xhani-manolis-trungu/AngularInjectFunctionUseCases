import { inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetSearch } from '../state/app.actions';

export const postSearchString = (): ((value: string) => Observable<any>) => {
  const store = inject(Store);

  return (value: string) => store.dispatch(new SetSearch(value));
};

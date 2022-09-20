import { HttpClient } from '@angular/common/http';
import { inject, Inject } from '@angular/core';

@Inject({
  providedIn: 'root',
})
export abstract class BaseHttpService {
  abstract url: string;
  private httpClient = inject(HttpClient);

  get() {
    return this.httpClient.get(this.url);
  }

  post(value: any) {
    return this.httpClient.post(this.url, value);
  }

  put() {}

  delete() {}
}

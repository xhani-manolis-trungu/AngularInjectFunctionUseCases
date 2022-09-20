import { HttpClient } from '@angular/common/http';
import {
  Component,
  inject,
  InjectionToken,
  OnInit,
  VERSION,
} from '@angular/core';
import { first } from 'rxjs';
import { ProductService } from './product.service';

interface Logger {
  log: (value: string) => void;
}

const LOGGER_TOKEN = new InjectionToken<Logger>('a value', {
  factory: (): Logger => {
    return {
      log: () => console.log('a value'),
    };
  },
});

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: LOGGER_TOKEN,
      useFactory: () => {
        const httpClient = inject(ProductService);
        return {
          log: (value?: string) => {
            httpClient.post(value).pipe(first()).subscribe();
          },
        };
      },
    },
  ],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  constructor() {
    const logger = inject(LOGGER_TOKEN).log;
    logger('body');
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

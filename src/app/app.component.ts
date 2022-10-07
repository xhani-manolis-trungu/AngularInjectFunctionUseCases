import {
  Component,
  inject,
  InjectionToken,
  OnInit,
  VERSION,
} from '@angular/core';
import { customLoggerFactory, setSearch } from './factories';

interface ILogger {
  log: (value: string) => void;
}

interface ISetSearch {
  setSearch: (value: string) => void;
}

// Using custom Injection Token
export const LOGGER_TOKEN = new InjectionToken<ILogger>('a value', {
  factory: (): ILogger => {
    return {
      log: () => console.log('logger factory without Inject() function'),
    };
  },
});

// Using custom Injection Token
export const SET_SEARCH_TOKEN = new InjectionToken<ISetSearch>(
  'setSearch Token',
  {
    factory: (): ISetSearch => {
      return {
        setSearch: () =>
          console.log('search factory without Inject() function'),
      };
    },
  }
);

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      // Using Custom Injection Token with Inject function utilized
      provide: LOGGER_TOKEN,
      useFactory: customLoggerFactory,
    },
    {
      provide: SET_SEARCH_TOKEN,
      useFactory: setSearch,
    },
  ],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  constructor() {
    const logger = inject(LOGGER_TOKEN).log;
    logger('LOGGER factory with Inject() function');

    const search = inject(SET_SEARCH_TOKEN).setSearch;
    search('SEARCH factory with Inject() function');
  }

  ngOnInit(): void {
    console.log('On Init App Component');
  }
}


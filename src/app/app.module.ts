import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPlugin } from '@ngxs/logger-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AppState, AppStateModel } from './state/app.state';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([AppState]),
    NgxsLoggerPluginModule.forRoot({ disabled: false }),
  ],
  declarations: [AppComponent, HelloComponent, SearchComponent],
  bootstrap: [AppComponent],
  providers: [ProductService],
})
export class AppModule {}

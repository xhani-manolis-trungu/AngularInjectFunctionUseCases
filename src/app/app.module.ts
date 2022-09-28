import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPlugin } from '@ngxs/logger-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AppState, AppStateModel } from './state/app.state';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './AngularMaterial/angular-material.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([AppState]),
    NgxsLoggerPluginModule.forRoot({ disabled: false }),
    UsersComponent
  ],
  declarations: [AppComponent, HelloComponent, SearchComponent],
  bootstrap: [AppComponent],
  providers: [ProductService],
})
export class AppModule {}

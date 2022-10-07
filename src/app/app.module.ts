import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AppState } from './state/app.state';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './feature/home/home.module';
import { AngularMaterialModule } from './AngularMaterial/angular-material.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([AppState]),
    NgxsLoggerPluginModule.forRoot({ disabled: false }),
    UsersComponent,
    HomeModule,
    AngularMaterialModule
  ],
  declarations: [AppComponent, HelloComponent, SearchComponent],
  bootstrap: [AppComponent],
  providers: [ProductService],
})
export class AppModule {}

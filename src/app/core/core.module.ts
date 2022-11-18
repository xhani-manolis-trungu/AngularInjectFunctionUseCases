import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CallerChainInterceptorService } from './caller-chain-interceptor.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CallerChainInterceptorService,
      multi: true,
    },
  ],
  exports: [CommonModule, HttpClientModule],
})
export class CoreModule {}

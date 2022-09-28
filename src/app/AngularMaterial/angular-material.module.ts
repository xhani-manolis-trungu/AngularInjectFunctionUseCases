import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// For components using angular-animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

// Imports of used components

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
  ],
  exports: [MatButtonModule, MatInputModule, MatCardModule, MatToolbarModule],
  declarations: [],
})
export class AngularMaterialModule {}

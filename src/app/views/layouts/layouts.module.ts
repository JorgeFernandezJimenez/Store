import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { StorageService } from '../lib/storage.service';

@NgModule({
  declarations: [NavComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [NavComponent, FooterComponent],
  providers: [StorageService]
})
export class LayoutsModule { }

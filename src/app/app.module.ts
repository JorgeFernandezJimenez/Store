import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { LayoutsModule } from './layouts/layouts.module';
import { AsideModule } from './layouts/aside/aside.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LayoutsModule,
    AsideModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

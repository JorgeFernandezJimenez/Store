import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AsideComponent } from './aside.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from 'src/app/data.service';
import { StorageService } from 'src/app/lib/storage.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, MenuComponent, AsideComponent],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  exports: [AsideComponent],
  providers: [LoginService, StorageService]
})
export class AsideModule { }

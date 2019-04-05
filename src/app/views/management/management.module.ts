import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagementRoutingModule } from './management.routing';
import { GamesComponent } from './games/games.component';
import { GameService } from '../games/game.service';
import { CategoryService } from '../games/categories/category.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from 'src/app/data.service';
import { UpdateComponent } from './games/update/update.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [ProfileComponent, GamesComponent, UpdateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ManagementRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService,{
      dataEncapsulation: false
    }),
    SweetAlert2Module
  ],
  providers: [GameService, CategoryService]
})
export class ManagementModule { }

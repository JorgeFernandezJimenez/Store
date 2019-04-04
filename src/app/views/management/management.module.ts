import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagementRoutingModule } from './management.routing';
import { GamesComponent } from './games/games.component';
import { GameService } from '../games/game.service';
import { CategoryService } from '../games/categories/category.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProfileComponent, GamesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ManagementRoutingModule,
    HttpClientModule
  ],
  providers: [GameService, CategoryService]
})
export class ManagementModule { }

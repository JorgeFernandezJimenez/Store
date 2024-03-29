import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GameService } from './game.service';
import { ListComponent } from './list/list.component';
import { ListByCategoryComponent } from './list-by-category/list-by-category.component';
import { GameComponent } from './game/game.component';
import { CategoriesComponent } from './categories/categories.component';
import { GamesRoutingModule } from './games.routing';
import { GamesComponent } from './games.component';
import { CategoryService } from './categories/category.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from 'src/app/data.service';
import { FormsModule } from '@angular/forms';
import { ListByPatternComponent } from './list-by-pattern/list-by-pattern.component';

@NgModule({
  declarations: [ListComponent, ListByCategoryComponent, GameComponent, CategoriesComponent, GamesComponent, ListByPatternComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    GamesRoutingModule,
    FormsModule
  ],
  exports: [],
  providers: [GameService, CategoryService, DataService]
})
export class GamesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games.component';
import { ListByCategoryComponent } from './list-by-category/list-by-category.component';
import { GameComponent } from './game/game.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {path: '', component: GamesComponent, children: [
      {path: ':category', component: ListByCategoryComponent},
      {path: ':game', component: GameComponent},
      {path: '', component: ListComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games.component';
import { ListByCategoryComponent } from './list-by-category/list-by-category.component';
import { GameComponent } from './game/game.component';
import { ListComponent } from './list/list.component';
import { ListByPatternComponent } from './list-by-pattern/list-by-pattern.component';

const routes: Routes = [
    {path: '', component: GamesComponent, children: [
      {path: 'category/:id', component: ListByCategoryComponent},
      {path: 'game/:id', component: GameComponent},
      {path: 'games/:pattern', component: ListByPatternComponent},
      {path: 'games', component: ListComponent},
      {path: '', component: ListComponent},
      {path: '**', redirectTo: '/', pathMatch: 'full'}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }

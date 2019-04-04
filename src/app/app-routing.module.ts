import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementGuard } from './views/management/management.guard';

const routes: Routes = [
  {
    path: 'management', 
    loadChildren: './views/management/management.module#ManagementModule', 
    canActivate: [ManagementGuard]
  },
  {
    path: '', 
    loadChildren: './views/games/games.module#GamesModule'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

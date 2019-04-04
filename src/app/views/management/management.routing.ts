import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'games',
        component: GamesComponent
    },
    {
        path: '**',
        component: ProfileComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }

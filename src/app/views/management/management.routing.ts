import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { GamesComponent } from './games/games.component';
import { UpdateComponent } from './games/update/update.component';

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
        path: 'game/:id',
        component: UpdateComponent
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }

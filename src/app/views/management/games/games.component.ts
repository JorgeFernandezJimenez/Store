import { Component, OnInit } from '@angular/core';
import { Game } from '../../games/game';
import { GameService } from '../../games/game.service';
import { Category } from '../../games/categories/category';
import { CategoryService } from '../../games/categories/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styles: []
})
export class GamesComponent implements OnInit {

  public games: Game[];
  public categories: Category[];

  constructor(
    private _gameService: GameService,
    private _categoryService: CategoryService,
    private router: Router
  ) {
    this.categories = new Array<Category>();
  }

  ngOnInit() {
    this._gameService.getAll().subscribe(response => {
      this.games = response;
      this.loadCategories();
    });
  }

  private loadCategories() {
    for(let game of this.games) {
      this._categoryService.getOne(game.category).subscribe(response => this.categories.push(response));
    }
  }

  public delete(id: number) {
    this._gameService.delete(id);
  }

  public update(id: number) {
    this.router.navigateByUrl('/management/game/update/' + id);
  }

}

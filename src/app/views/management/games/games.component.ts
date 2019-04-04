import { Component, OnInit } from '@angular/core';
import { Game } from '../../games/game';
import { GameService } from '../../games/game.service';
import { Category } from '../../games/categories/category';
import { CategoryService } from '../../games/categories/category.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styles: []
})
export class GamesComponent implements OnInit {

  public games: Game[];
  public category: Category;

  constructor(
    private _gameService: GameService,
    private _categoryService: CategoryService
  ) { }

  ngOnInit() {
    this._gameService.getAll().subscribe(
      response => this.games = response
    )
  }

  public getCategory(id: number): Category {
    this._categoryService.getOne(id).subscribe(response => this.category = response);
    return this.category;
  }

}

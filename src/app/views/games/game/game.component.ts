import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../categories/category';
import { CategoryService } from '../categories/category.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styles: []
})
export class GameComponent implements OnInit {

  public game: Game;
  private id: number;
  public category: Category;

  constructor(
    private _gameService: GameService,
    private _categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'] - 1;
    this._gameService.getOne(this.id).subscribe(
      response => {
        this.game = response;
        this.getCategory();
      });
  }

  private getCategory() {
    this._categoryService.getOne(this.game.id).subscribe(
      response => this.category = response
    );
  }

}

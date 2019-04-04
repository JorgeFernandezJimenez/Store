import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-by-category',
  templateUrl: './list-by-category.component.html',
  styles: []
})
export class ListByCategoryComponent implements OnInit {

  private id: number;
  public games: Game[];

  constructor(
    private _gameService: GameService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      response => {
        this.id = response.id - 1;
        this.loadGames();
      }
    );
  }

  private loadGames() {
    this._gameService.getAllByCategory(this.id).subscribe(
      response => this.games = response
    );
  }

}

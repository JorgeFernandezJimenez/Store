import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-list-by-pattern',
  templateUrl: './list-by-pattern.component.html',
  styles: []
})
export class ListByPatternComponent implements OnInit {

  public games: Game[];
  private pattern: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _gameService: GameService
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      response => {
        this.pattern = response.pattern;
        this.loadGames();
      }
    );
  }

  private loadGames() {
    this._gameService.getAllByName(this.pattern).subscribe(
      response => this.games = response
    );
  }

}

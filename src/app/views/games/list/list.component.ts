import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  public games: Game[];

  constructor(
    private _gameService: GameService
  ) { }

  ngOnInit() {
    this._gameService.getAll().subscribe(
      response => this.games = response
    );
  }

}

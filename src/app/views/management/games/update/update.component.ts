import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/views/games/game';
import { GameService } from 'src/app/views/games/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/views/games/categories/category';
import { CategoryService } from 'src/app/views/games/categories/category.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html'
})
export class UpdateComponent implements OnInit {

  public game: Game;
  private id: number;
  public categories: Category[];
  public form: FormGroup;

  constructor(
    private _gameService: GameService,
    private _categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this._categoryService.getAll().subscribe(response => this.categories = response, null, () => {
      if(this.id) {
        this.loadGame()
      }else {
        this.loadFormValidators();
      }
    });
  }

  ngOnInit() {
  }

  private loadGame() {
      this._gameService.getOne(this.id).subscribe(response => this.game = response, null, () => this.loadFormValidators());
  }

  private loadFormValidators() {
    this.form = this.fb.group({
      'name': new FormControl(this.game.name, [Validators.required]),
      'price': new FormControl(this.game.price, [Validators.required, Validators.pattern(/^([0-9]+)$|^([0-9]+)((\.\d{1,2})?)$/)]),
      'stock': new FormControl(this.game.stock, [Validators.required, Validators.pattern(/^(\d+)$/)]),
      'category': new FormControl(this.game.category, [Validators.required])
    });
  }

  get name() {return this.form.get('name')}

  get price() {return this.form.get('price')}

  get stock() {return this.form.get('stock')}

  get category() {return this.form.get('category')}

  public update() {
    this._gameService.update(this.game).subscribe(res => {
      console.log(res);
      Swal.fire('Juego actualizado', '', 'success').then(() => {
        this.router.navigate(['/management/games']);
      })
    });
  }

}

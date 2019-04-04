import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {

  public categories: Category[];
  public pattern: string;

  constructor(
    private _categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this._categoryService.getAll().subscribe(
      response => this.categories = response
    );
  }

  public loadGames() {
    this.router.navigateByUrl('/games/' + this.pattern);
  }

}

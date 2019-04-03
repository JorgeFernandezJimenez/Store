import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/lib/storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  public isAnonymous: boolean;

  constructor(
    private _storageService: StorageService
  ) {
    this.subscribeToIsAnonymous();
  }

  ngOnInit() {
  }

  private subscribeToIsAnonymous() {
    this._storageService.getIsAnonymous$().subscribe(
      response => this.isAnonymous = response
    );
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  @Input() public user: User
  @Output() public logOut = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public logout() {
    this.logOut.emit();
  }

}

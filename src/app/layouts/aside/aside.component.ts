import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './User';
import { StorageService } from 'src/app/lib/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styles: []
})
export class AsideComponent implements OnInit {

  public user: User;
  private isLogin: boolean = false;

  constructor(
    private _loginService: LoginService,
    private _storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscribeToIsAnonymous();
  }

  private subscribeToIsAnonymous() {
    this._storageService.getUser$().subscribe(response => {
      this.user = response;
    });
  }

  public login(user: User) {
    this._loginService.getAll().subscribe(
      response => {
        if(response.length > 0) {
          for(let us of response) {
            if(user.password === us.password && user.email === us.email) {
              this._storageService.emitUser(us);
              this.isLogin = true;
              this.router.navigateByUrl('/');
            }
          }
        }
        if(!this.isLogin){
          this._storageService.emitUser(null);
        }
      }
    );
  }

  public logout() {
    this._storageService.emitUser(null);
    this.router.navigateByUrl('/');
  }

}

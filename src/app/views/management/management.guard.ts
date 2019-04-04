import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/lib/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ManagementGuard implements CanActivate {

  private isLogin: boolean;

  constructor(
    private _storageService: StorageService,
    private router: Router
  ) {
    this._storageService.getIsAnonymous$().subscribe(response => this.isLogin = !response);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.isLogin){
      return true;
    }
    this.router.navigateByUrl('/');
    return this.isLogin;
  }
  
}
